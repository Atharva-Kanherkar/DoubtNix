const express = require("express");
const router = express.Router();
 
 
const {validateCookie, teacherAuth} = require('../middlewares/auth.js');
const  { upgradeToMentor} = require('../controllers/mentor.js');
 




router.route("/makeamentor").post(teacherAuth,upgradeToMentor);

 
 
 



module.exports = router;