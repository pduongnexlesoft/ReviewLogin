const User = require('../../Models/Users');
const GetAllUser = async (req, res, next) => {
    try {
        const users = await User.find();
        const user = users.map(user=>{
            const {password, ...others} = user._doc;
            return others;
        })
        res.status(200).json({
            status: 'success', 
            message:"thanh cong",
            data: {user}
        })
    } catch (error) {
        res.status(500).json({
            messager:"ERROR SERVER",
            error
        })
    }
}
module.exports = GetAllUser;