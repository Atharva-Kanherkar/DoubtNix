const jwtsecret = "255ea9029d14f1e0c10e423571c2db772ba438bee9fd3018a294cb921f41680398c20c";
const jwt = require('jsonwebtoken');
const { User } = require("../models/auth");  


exports.teacherAuth = (req,res,next)=>{
    const token = req.body.jwt;
    if(token){
        jwt.verify(token, jwtsecret, (err,decodedtoken)=>{
            if(err){
                return res.status(401).json({ message: "Not authorized" });
            }
            else{
                if (decodedtoken.role !== "teacher") {
                    return res.status(401).json({ message: "Not authorized" })
                  }
                else {
                     next();
                }
            }
        })
    }
    else {
        return res
          .status(401)
          .json({ message: "Not authorized, token not available" })
      }
    }
 
    exports.studentAuth = (req, res, next) => {
       const token =  req.headers.authorization;
       
        if (!token) {
            return res.status(401).json({ message: "Not authorized, token not available" });
        }
    
        
        const tokenParts = token.split(' ');
        if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
            return res.status(401).json({ message: "Invalid token format" });
        }
    
        const jwtToken = tokenParts[1];  
       
        jwt.verify(jwtToken, jwtsecret, (err, decodedtoken) => {
            if (err) {
                return res.status(401).json({ message: "Not authorized" });
            } else {
                if (decodedtoken.role !== "student") {
                    return res.status(401).json({ message: "Not authorized" });
                } else {
                    next();
                }
            }
        });
    };
    
 

    exports.validateCookie = async (req, res, next) => {
        const cookie = req.cookies;
        if (!cookie.jwt) {
            res.status(401).json({
                message: "Not authorized"
            });
        } else {
            try {
                const decoded = jwt.verify(cookie.jwt, jwtsecret);
               
                
                
                req.user = decoded;
                
                next();
            } catch (error) {
                res.status(401).json({
                    message: "Invalid token",
                    error: error.message
                });
            }
        }
    };
    