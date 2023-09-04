const jwt = require('jsonwebtoken');
require('dotenv').config();

const RefeshAccessToken = async (req,res) =>{
    try {
        const refeshToken = req.cookies.refeshToken;
        if (!refeshToken){
            return res.status(401).json("chua dang nhap ma doi refresh");
        }
        jwt.verify(refeshToken,process.env.JWT_REFRESH_KEY,(error, user)=>{
            if (error){
                return res.status(403).json({
                    Messeger:"looi loi loi", 
                    error:error.message
                });
            }
            const NewAccessToken = jwt.sign({
                id:user.id,
                fullname:user.fullname
            },process.env.JWT_ACCESS_KEY,{
                expiresIn:"30s"
            });
            const NewRefreshToken = jwt.sign({
                id:user.id,
                fullname:user.fullname
            },process.env.JWT_REFRESH_KEY,{
                expiresIn:"90s"
            });
            res.cookie("refeshToken",NewRefreshToken,{
                httpOnly: true,
                secure: false,
                path: "/",
                sameSite: "strict"
            });
            res.status(200).json({
                status: 'success', 
                accesstoken:NewAccessToken
            });
        })
    } catch (error) {
        res.status(500).json({
            messager:"ERROR SERVER",
            error
        })
    }
   
};
module.exports = RefeshAccessToken
