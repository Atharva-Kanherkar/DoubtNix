const express = require("express");
const router = express.Router();
 
const { handleReplyViews } = require('../controllers/reply.js');
const {teacherAuth,studentAuth,authenticate, validateCookie} = require('../middlewares/auth.js');
 
const {HandleReplyCreation} = require('../controllers/reply.js');
 
router.post('/createreplystudent', validateCookie, HandleReplyCreation );
router.get('/replyviews/:replyId', handleReplyViews);










module.exports = router;