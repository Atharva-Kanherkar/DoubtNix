const express = require('express');
const port = 3000;
const app = express();
const connectDB = require("./db");
connectDB();
const { teacherAuth, studentAuth, validateCookie } = require('./middlewares/auth');
app.use(express.json());
const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.get("/teacher", teacherAuth, (req, res) => res.send("Teacher Route"));
app.get("/student", studentAuth, (req, res) => res.send("Student Route"));
app.use("/api/auth", require('./routes/auth'));
app.use("/api/doubt", require('./routes/doubt.js'));
app.use("/api/reply", require('./routes/reply.js'));
 





















app.listen(port, (err,data)=>{
    try{
      console.log("Server is up and running!");
    }
    catch(err){
        console.log("something is wrong!");
    }
})