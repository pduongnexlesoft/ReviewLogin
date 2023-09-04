const GetAllUser = require('./user/GetAllUser');
const DeleteUser = require('./user/Deleteuser') 
const usercontroller = {
    GetAllUser:GetAllUser,
    DeleteUser:DeleteUser
}
module.exports = usercontroller;