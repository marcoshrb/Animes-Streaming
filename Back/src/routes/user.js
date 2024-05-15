const express = require('express');
const UserController = require('../controller/userController');
const route = express.Router();

route
    .post('/register', UserController.register)
    .post('/', UserController.login)
    .delete('/remove/:id', UserController.remove)
    .get('/getAll', UserController.GetAll)

module.exports = route;