
const { User } = require("../models/auth");  
const bcrypt = require("bcryptjs");
const jwtsecret = "255ea9029d14f1e0c10e423571c2db772ba438bee9fd3018a294cb921f41680398c20c";
const jwt = require('jsonwebtoken');


exports.handleUserSignUp = async (req, res) => {
    const { name, email, password, role } = req.body;
    try {
        const hash = await bcrypt.hash(password, 10);
        const user = await User.create({
            name,
            email,
            password: hash,
            role,
        });

        const maxAge = 3 * 60 * 60;
        const token = jwt.sign(
            { id: user._id, name: user.name, role: user.role },
            jwtsecret,  
            {
                expiresIn: maxAge, 
            }
        );
        console.log(token);

        res.cookie("jwt", token, {
            httpOnly: true,
            maxAge: maxAge * 1000,  
        });

        res.status(201).json({
            message: "User successfully created",
            user: user._id,
        });
    } catch (err) {
        res.status(500).json({
            message: "User was not successfully created",
            "error" : err.message,
        });
    }
};
exports.handleUserLogin = async (req, res) => {
    const { name, password, role } = req.body;

    if (!name || !password) {
        return res.status(400).json({
            message: "Name or password not provided"
        });
    } else if (!role || (role !== 'teacher' && role !== 'student')) {
        return res.status(400).json({
            message: "Specific user role (teacher or student) not provided"
        });
    }

    try {
        const user = await User.findOne({ name });

        if (!user) {
            return res.status(404).json({
                message: "User not found or invalid credentials"
            });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({
                message: "Invalid password"
            });
        }

        const maxAge = 3 * 60 * 60;
        const token = jwt.sign(
            { id: user._id, name: user.name, role: user.role },
            jwtsecret,
            {
                expiresIn: maxAge,
            }
        );
  
       
       
       
        user.accessToken = token;
        await user.save();

        res.cookie("jwt", token, {
            httpOnly: true,
            maxAge: maxAge * 1000,
        });

        return res.status(200).json({
            message: "Login successful",
            user: user._id,
            accessToken : token
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
};

 
exports.deleteUser = async (req, res, next) => {
    const { id } = req.body;
    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }
        await user.remove();
        res.status(201).json({ message: "User successfully deleted", user });
    } catch (error) {
        res.status(400).json({ message: "An error occurred", error: error.message });
    }
};
