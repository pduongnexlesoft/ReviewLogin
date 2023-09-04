const User = require('../../Models/Users');
const DeleteUser = async (req,res,next) =>{
    try {
        const user = await User.findById();
        res.status(200).json({
            status: 'success', 
            messeger:"xoa thanh cong",
        })        
    } catch (error) {
        res.status(500).json({
            messager:"ERROR SERVER",
            error
        })
    }
}
module.exports = DeleteUser;