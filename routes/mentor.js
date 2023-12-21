const express = require("express");
const router = express.Router();
 
 
const {validateCookie, teacherAuth, isAMentor} = require('../middlewares/auth.js');
const  { upgradeToMentor, createGroupForMentor, seeAllStudents} = require('../controllers/mentor.js');
router.route("/makeamentor").post(teacherAuth,upgradeToMentor);
router.route("/addStudents").post(isAMentor,createGroupForMentor );
router.route("/getStudents").get(isAMentor, seeAllStudents);

 
 
 



module.exports = router;