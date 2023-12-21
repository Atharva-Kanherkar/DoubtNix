const express = require("express");
const router = express.Router();
 
const { handleReplyViews, handleReplyDownvotes, handleReplyUpvotes} = require('../controllers/reply.js');
const {validateCookie} = require('../middlewares/auth.js');
 
const {HandleReplyCreation} = require('../controllers/reply.js');
 
router.post('/createreply', validateCookie, HandleReplyCreation );
router.get('/replyviews/:replyId', handleReplyViews);
router.get('/replyupvote/:replyId',validateCookie ,handleReplyUpvotes);
router.get('/replydownvote/:replyId', validateCookie,handleReplyDownvotes);



module.exports = router;