
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 

const doubtCreationSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    codeSnippet: String, 
    tags: [String], 
    pictures: [String],  
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    information: {
        type: Schema.Types.ObjectId,
        ref: 'DoubtInformation'
    },
    upvotes: {
        type: Number,
        default: 0
    },
    downvotes: {
        type: Number,
        default: 0
    },
    bookmarks: {
        type: Number,
        default: 0
    },
    creationTime: {
        type: Date,
        default: Date.now
    },
    views: {
        type: Number,
        default: 0
    }
});

const replySchema = new Schema({
    doubt: {
        type: Schema.Types.ObjectId,
        ref: 'DoubtCreation'
    },
    keyTakeAway :{
        type : String,
        required : true
    },
    codeSnippet: String,
    pictures: [String],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    content: String,
    upvotes: {
        type: Number,
        default: 0
    },
    downvotes: {
        type: Number,
        default: 0
    },
    views: {
        type: Number,
        default: 0
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
   
});


const solutionSchema = new  Schema({
    doubt: {
        type: Schema.Types.ObjectId,
        ref: 'DoubtCreation'
    },
    keyTakeAway :{
        type : String,
        required : true
    },
    codeSnippet: String,
    pictures: [String],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    content: String,



});
 
 
const doubtCreation = mongoose.model('doubtCreation', doubtCreationSchema);
const Reply = mongoose.model('Reply', replySchema);
const solution = mongoose.model('solution', solutionSchema);



 
module.exports = {  doubtCreation , Reply, solution};
