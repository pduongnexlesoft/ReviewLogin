const express = require('express');
const AuthController = require('../Controllers/AuthControllers');
const verifyToken = require('../Middleware/VeryfyToken');


const Router = express();

Router.route('/auth/createuser').post(AuthController.CreateUser);
Router.route('/auth/login').post(AuthController.LoginUser);
Router.route('/auth/refresh').post(AuthController.RefreshAccessToken);
Router.route('/auth/logout').post(verifyToken,AuthController.Logout);


module.exports = Router;
