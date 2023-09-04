const CreateUser = require('./auth/CreateUser');
const LoginUser = require('./auth/login'); 
const Logout = require('./auth/logout');
const RefreshAccessToken = require('./auth/refeshToke');

const UserController = {
    CreateUser:CreateUser,
    LoginUser:LoginUser,
    RefreshAccessToken:RefreshAccessToken,
    Logout:Logout
}
module.exports = UserController;

