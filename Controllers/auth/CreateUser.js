const User = require('../../Models/Users');
const bcrypt = require('bcryptjs');
const CreateUser = async (req, res, next) => {
    const {
        fullname,
        email,
        password
    } = req.body;
    try {
        const CheckEmail = await User.findOne({ email });
        if (CheckEmail) {
            return res.status(400).json({ 
                status: 'error', 
                message: 'Email đã có.' 
            });
        }
        bcrypt.hash(password, 10, async function(err, hashpass) {
            if (err) {
                return res.status(500).json({ 
                    status: 'error', 
                    message: 'Lỗi khi băm.' 
                });
            }
            const newUser = new User({
                fullname,
                email,
                password: hashpass  
            });
            await newUser.save();
            return res.status(200).json({
                status: 'success', 
                message: 'đã được thêm',
            });
        });
    } catch (error) {
        res.status(500).json({
            messager:"ERROR SERVER",
            error
        })
    }
}
module.exports = CreateUser;
