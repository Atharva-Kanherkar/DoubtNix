const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name : {
        type : String,
        required:true,
    },
    email : {
        type : String,
        required:true,
        unique : true,
    },
    password : {
        type : String,
        required:true,

    },
    role: {
        type: String,
        enum: ['student', 'teacher'],
        default: 'student'
    },
    questionsAsked: {
        type: Number,
        default: 0
    },
    bookmarks: {
        type: Number,
        default: 0
    },
    activityTime: {
        type: Number,
        default: 0 
    },
    profilePicture: {
        type: String
    },
     
    mentorGroup: {
        type: String 
    },
    interests: {
        type: [String]  
    },
    bio: {
        type: String  
    },
    accessToken: {
        type: String,
    },

});



const User = mongoose.model('User', userSchema);
 

module.exports = { User  };
