 
const express = require("express");
const router = express.Router();
 
 
const {teacherAuth,studentAuth,authenticate, validateCookie} = require('../middlewares/auth.js');
 
const { HandleDoubtCreation, HandleDownvotes, HandleUpvotes, HandleViews , handleBookmarks  } = require('../controllers/doubt.js');
router.post('/createdoubt',studentAuth,   HandleDoubtCreation);
 
router.get('/upvote/:doubtId',  validateCookie, HandleUpvotes);
router.get('/:doubtId', HandleViews);
router.get('/downvote/:doubtId',  validateCookie, HandleDownvotes);
router.get('/bookmarks/:doubtId', validateCookie, handleBookmarks);
 











module.exports = router;
