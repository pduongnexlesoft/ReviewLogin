const express = require('express');
const usersController = require('../Controllers/UsersController');
const Veryfytoken = require('../Middleware/VeryfyToken')
const Router = express();

Router.route('/users/getalluser').get(usersController.GetAllUser);
Router.route('/users/:id').delete(Veryfytoken,usersController.DeleteUser);

module.exports = Router;
