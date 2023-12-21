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
        enum: ['student', 'teacher', 'mentor'],
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
    groups: [{
        name: {
            type: String,
            required: true,
        },
        whatsappLink: {
            type: String,
            required: true,
        },
        students: [{
            type: Schema.Types.ObjectId,
            ref: 'User', // Reference to the user schema (students)
        }],
    }],
    experienceLevel: {
        type: String,  
    },
    expertise: {
        type: [String],  
    },
    availability: {
        type: String,  
    },
    rating: {
        type: Number,  
    },
    schedule: {
        type: String,  
    },
    contact: {
        email: {
            type: String,
        },
        phone: {
            type: String,
        },
        
    },
    achievements: [{
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        date: {
            type: Date,
        },
    }],

});

 

const User = mongoose.model('User', userSchema);
 
 

module.exports = { User   };
