const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { handleReplyViews } = require('../controllers/reply.js');
const {teacherAuth,authenticate, validateCookie} = require('../middlewares/auth.js');
const { handleUserSignUp,handleUserLogin,deleteUser } = require("../controllers/auth.js");
router.route("/register").post(handleUserSignUp);
router.route("/login").post(handleUserLogin);
router.route("/deleteUser").delete(teacherAuth,deleteUser);
const {HandleReplyCreation} = require('../controllers/reply.js');
 
router.post('/createreply', validateCookie, HandleReplyCreation );
 
 
 










module.exports = router;
