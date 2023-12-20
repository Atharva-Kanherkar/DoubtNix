const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { handleReplyViews } = require('../controllers/reply.js');
const {teacherAuth,studentAuth,authenticate, validateCookie} = require('../middlewares/auth.js');
const { handleUserSignUp,handleUserLogin,deleteUser } = require("../controllers/auth.js");
router.route("/register").post(handleUserSignUp);
router.route("/login").post(handleUserLogin);
router.route("/deleteUser").delete(teacherAuth,deleteUser);
const {HandleReplyCreation} = require('../controllers/reply.js');
 
router.post('/createreplystudent', studentAuth, HandleReplyCreation );
router.post('/createreplyteacher', teacherAuth, HandleReplyCreation );
 
 










module.exports = router;
