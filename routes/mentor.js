const express = require("express");
const router = express.Router();
 
 
const {validateCookie, isAStudent,isATeacher, isAMentor} = require('../middlewares/auth.js');
const  { upgradeToMentor, createGroupForMentor, seeAllStudents, handleCreateSolution} = require('../controllers/mentor.js');
router.route("/makeamentor").post(isATeacher,upgradeToMentor);
router.route("/addStudents").post(isAMentor,createGroupForMentor );
router.route("/getStudents").get(isAMentor, seeAllStudents);
router.route("/postsolution").post(isAMentor,handleCreateSolution );
 
 



module.exports = router;