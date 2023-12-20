const { doubtCreation} = require('../models/doubt');

const { User } = require("../models/auth");  
const bcrypt = require("bcryptjs");
const jwtsecret = "255ea9029d14f1e0c10e423571c2db772ba438bee9fd3018a294cb921f41680398c20c";
const jwt = require('jsonwebtoken');

exports.HandleDoubtCreation = async (req, res, next) => {
    try {
        const { title, description, codeSnippet, tags, pictures, user } = req.body;
        const newDoubt = await doubtCreation.create({
            title,
            description,
            codeSnippet,
            tags,
            pictures,
            user
        });

        res.status(201).json({
            message: 'Doubt created successfully',
            newDoubt
        });
    } catch (err) {
        res.status(500).json({
            errorMessage: err.message
        });
    }
};

exports.HandleViews = async (req, res, next) => {
    const { doubtId } = req.params;
    try {
        const doubt = await doubtCreation.findById(doubtId);

        if (!doubt) {
            return res.status(404).json({ message: 'Doubt not found' });
        }

        doubt.views += 1;

        await doubt.save();

        res.status(200).json({ doubt });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching doubt', error: error.message });
    }
}


exports.HandleUpvotes = async(req,res,next)=>{
    const { doubtId } = req.params;
    try {
        const doubt = await doubtCreation.findById(doubtId);
        if (!doubt) {
            return res.status(404).json({ message: 'Doubt not found' });
        }

       
        doubt.upvotes++;


        
        await doubt.save();

        res.status(200).json({ doubt });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching doubt', error: error.message });
    }
}
exports.HandleDownvotes = async(req,res,next)=>{
    const { doubtId } = req.params;
    try {
        const doubt = await doubtCreation.findById(doubtId);
        if (!doubt) {
            return res.status(404).json({ message: 'Doubt not found' });
        }

       
        doubt.downvotes += 1;

        
        await doubt.save();

        res.status(200).json({ doubt });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching doubt', error: error.message });
    }
}
exports.handleBookmarks = async (req, res) => {
    const { doubtId } = req.params;
    const userId = req.user.id;  
    

    try {
        const doubt = await doubtCreation.findById(doubtId);
        if (!doubt) {
            return res.status(404).json({ message: 'Doubt not found' });
        }

        doubt.bookmarks += 1;
        await doubt.save();

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.bookmarks += 1;
        await user.save();

        res.status(200).json({ message: 'Bookmark marked successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error marking bookmark', error: error.message });
    }
};
