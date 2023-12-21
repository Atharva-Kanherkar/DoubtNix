const { User, Mentor} = require("../models/auth");  
const bcrypt = require("bcryptjs");
const jwtsecret = "255ea9029d14f1e0c10e423571c2db772ba438bee9fd3018a294cb921f41680398c20c";
const jwt = require('jsonwebtoken');






exports.upgradeToMentor = async (req, res) => {
    try {
        const { studentId } = req.body;
        const {  
            groups,// Assuming these will be populated later
            experienceLevel,
            expertise,
            availability,
            schedule,
            contact: {
                email,
                phone,
            },
            achievements: [{
                title,
                description,
                date,
            }],} = req.body;
            
          
        const student = await User.findById(studentId);

        if (!student || student.role !== 'student') {
            return res.status(400).json({
                error: 'Invalid student or student is already a mentor.'
            });
        }

      
        student.role = 'mentor';
        await student.save();

    
        const newMentor = await Mentor.create({
            user: student._id, 
            groups,// Assuming these will be populated later
            experienceLevel,
            expertise,
            availability,
            schedule,
            contact: {
                email,
                phone,
            },
            achievements: [{
                title,
                description,
                date,
            }],
             
        });

        res.status(200).json({
            message: 'Student upgraded to mentor successfully.',
            mentor: newMentor
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

exports.createGroupForMentor = async (req, res) => {
    try {
        const { groupname, whatsappLink, studentIds } = req.body;

        const { mentorId } = req; // Mentor ID retrieved from middleware

        const mentor = await User.findById(mentorId);

        if (!mentor) {
            return res.status(404).json({ success: false, message: 'Mentor not found' });
        }

        // Check if studentIds exist and is an array
        if (!Array.isArray(studentIds) || studentIds.length === 0) {
            return res.status(400).json({ success: false, message: 'No valid student IDs provided' });
        }

        const studentsExist = await User.find({ _id: { $in: studentIds } });
        const invalidStudentIds = studentIds.filter(id => !studentsExist.map(student => String(student._id)).includes(String(id)));

        if (invalidStudentIds.length > 0) {
            return res.status(400).json({
                success: false,
                message: 'Invalid student IDs provided',
                invalidStudentIds
            });
        }

        // Ensure mentor.groups is initialized as an array
        mentor.groups = mentor.groups || [];

        const newGroup = {
            name: groupname,
            whatsappLink: whatsappLink,
            students: studentIds
        };

        mentor.groups.push(newGroup);

        await mentor.save();

        res.status(201).json({ success: true, message: 'Group created successfully', mentor });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
