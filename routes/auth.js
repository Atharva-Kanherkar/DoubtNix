const express = require("express");
const router = express.Router();
const {isATeacher } = require('../middlewares/auth.js');
const { handleUserSignUp,handleUserLogin,deleteUser } = require("../controllers/auth.js");
router.route("/register").post(handleUserSignUp);
router.route("/login").post(handleUserLogin);
router.route("/deleteUser").delete(isATeacher,deleteUser);
 
 
 
 










module.exports = router;
