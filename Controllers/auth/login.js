const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../Models/Users');
require('dotenv').config();

const LoginUser = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).json({ message: 'Người dùng không tồn tại' });
        }
        bcrypt.compare(req.body.password, user.password, function(error, password) {
            if (error || !password) {
                return res.status(401).json({ 
                    status: 'error', 
                    message: 'Mat khau dech dung',
                    error 
                });
            };
        });
        const AcessToken = jwt.sign({
            id:user.id,
            fullname:user.fullname
        },process.env.JWT_ACCESS_KEY,{
            expiresIn:"30s"
        })
        const refreshaccesstoken = jwt.sign({
            id:user.id,
            fullname:user.fullname
        },process.env.JWT_REFRESH_KEY,{
            expiresIn:"90s"
        })
        res.cookie("refeshToken",refreshaccesstoken,{
            httpOnly: true,
            secure: false,
            path: "/",
            sameSite: "strict"
        })
        const {password, ...others} = user._doc;
        res.status(200).json({
            status: 'success', 
            messeger:"thanh cong",
            data:{
                ...others,
                AcessToken,
            }
        })
    } catch (error) {
        res.status(500).json({
            messager:"ERROR SERVER",
            error
        })
    }
};


module.exports = LoginUser;

