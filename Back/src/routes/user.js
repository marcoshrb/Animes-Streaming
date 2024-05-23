const express = require('express');
const UserController = require('../controller/userController');
const route = express.Router();

route
    .post('/', UserController.login)
    .get('/getAll', UserController.GetAll)
    .get('/GetById/:id', UserController.GetById)
    .post('/register', UserController.register)
    .delete('/remove/:id', UserController.remove)

module.exports = route;