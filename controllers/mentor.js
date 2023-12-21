const { User } = require("../models/auth");
const bcrypt = require("bcryptjs");
const jwtsecret = "255ea9029d14f1e0c10e423571c2db772ba438bee9fd3018a294cb921f41680398c20c";
const jwt = require('jsonwebtoken');

exports.upgradeToMentor = async (req, res) => {
    try {
        const { studentId } = req.body;
        const {
            groups,
            experienceLevel,
            expertise,
            availability,
            schedule,
            contact: { email, phone },
            achievements,
        } = req.body;
        
        const student = await User.findById(studentId);

        if (!student || student.role !== 'student') {
            return res.status(400).json({
                error: 'Invalid student or student is already a mentor.'
            });
        }

        student.role = 'mentor';
        student.groups = groups;
        student.experienceLevel = experienceLevel;
        student.expertise = expertise;
        student.availability = availability;
        student.schedule = schedule;
        student.contact = { email, phone };
        student.achievements = achievements;

        const newMentor = await student.save();

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
        const { mentorId } = req;

        const mentor = await User.findById(mentorId);

        if (!mentor) {
            return res.status(404).json({ success: false, message: 'Mentor not found' });
        }

        // Validating studentIds
        // ...

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

exports.seeAllStudents = async (req, res) => {
    try {
        const { mentorId } = req;
        const mentor = await User.findById(mentorId).populate({
            path: 'groups.students',
            select: 'name email',
        });

        if (!mentor) {
            return res.status(404).json({ success: false, message: 'Mentor not found' });
        }

        const allStudents = mentor.groups.reduce((students, group) => {
            students.push(...group.students);
            return students;
        }, []);

        res.status(200).json({
            success: true,
            message: 'All students under the mentor',
            students: allStudents,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
