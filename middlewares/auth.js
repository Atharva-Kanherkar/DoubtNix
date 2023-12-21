const jwtsecret = "255ea9029d14f1e0c10e423571c2db772ba438bee9fd3018a294cb921f41680398c20c";
const jwt = require('jsonwebtoken');
const { User } = require("../models/auth");  

 

    exports.validateCookie = async (req, res, next) => {
        const cookie = req.cookies;
        if (!cookie.jwt) {
            res.status(401).json({
                message: "Not authorized"
            });
        } else {
            try {
                const decoded = jwt.verify(cookie.jwt, jwtsecret);
               
            
                req.user = decoded;
                
                next();
            } catch (error) {
                res.status(401).json({
                    message: "Invalid token",
                    error: error.message
                });
            }
        }
    };
    exports.isAMentor = async (req, res, next) => {
        const cookie = req.cookies;
        if (!cookie.jwt) {
            res.status(401).json({
                message: "Not authorized"
            });
        } else {
            try {
                const decoded = jwt.verify(cookie.jwt, jwtsecret);
                if (decoded.role !== 'mentor') {
                    res.status(401).json({
                        message: "Not authorized"
                    });
                }
    
                if (decoded.id) {
                    req.mentorId = decoded.id; // Set the mentor ID from the decoded JWT payload
                    req.user = decoded;
                    next();
                } else {
                    res.status(401).json({
                        message: "Mentor ID not found in token"
                    });
                }
            } catch (error) {
                res.status(401).json({
                    message: "Invalid token",
                    error: error.message
                });
            }
        }
    };

    exports.isATeacher = async (req, res, next) => {
        const cookie = req.cookies;
        if (!cookie.jwt) {
            res.status(401).json({
                message: "Not authorized"
            });
        } else {
            try {
                const decoded = jwt.verify(cookie.jwt, jwtsecret);
                if (decoded.role !== 'teacher') {
                    res.status(401).json({
                        message: "Not authorized"
                    });
                }
    
                if (decoded.id) {
                    req.teacherId = decoded.id; // Set the teacher ID from the decoded JWT payload
                    req.user = decoded;
                    next();
                } else {
                    res.status(401).json({
                        message: "Teacher ID not found in token"
                    });
                }
            } catch (error) {
                res.status(401).json({
                    message: "Invalid token",
                    error: error.message
                });
            }
        }
    };
    exports.isAStudent = async (req, res, next) => {
        const cookie = req.cookies;
        if (!cookie.jwt) {
            res.status(401).json({
                message: "Not authorized"
            });
        } else {
            try {
                const decoded = jwt.verify(cookie.jwt, jwtsecret);
                if (decoded.role !== 'student') {
                    res.status(401).json({
                        message: "Not authorized"
                    });
                }
    
                if (decoded.id) {
                    req.studentId = decoded.id; // Set the student ID from the decoded JWT payload
                    req.user = decoded;
                    next();
                } else {
                    res.status(401).json({
                        message: "Student ID not found in token"
                    });
                }
            } catch (error) {
                res.status(401).json({
                    message: "Invalid token",
                    error: error.message
                });
            }
        }
    };
        