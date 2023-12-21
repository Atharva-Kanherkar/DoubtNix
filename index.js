const express = require('express');
const port = 3000;
const app = express();
const connectDB = require("./db");
const ejs = require( 'ejs' );
const path  = require('path');
connectDB();
const {  validateCookie } = require('./middlewares/auth');
app.use(express.json());
const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use("/api/auth", require('./routes/auth'));
app.use("/api/doubt", require('./routes/doubt.js'));
app.use("/api/reply", require('./routes/reply.js'));
app.use("/api/mentor", require('./routes/mentor.js'));






















app.listen(port, (err,data)=>{
    try{
      console.log("Server is up and running!");
    }
    catch(err){
        console.log("something is wrong!");
    }
})