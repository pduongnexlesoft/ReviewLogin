const jwt = require('jsonwebtoken');
require('dotenv').config();
const Veryfytoken = (req,res,next) =>{
    const token = req.headers.token;
    if(!token){
        return res.status(401).json("Dech co token");
    }
    try {
        const accessToken = token.split(" ")[1];
        jwt.verify(accessToken, process.env.JWT_ACCESS_KEY,(err, user)=>{
            if(err){
                return res.status(403).json({
                    status: 'error', 
                    Messager:"token het hang "})
            }
            req.user = user;
            next();
        })
    } catch (error) {
        res.status(500).json({
            messager:"ERROR SERVER",
            error
        })
    }
}

module.exports = Veryfytoken;