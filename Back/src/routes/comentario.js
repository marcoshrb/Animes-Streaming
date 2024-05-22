const express = require('express');
const comentarioController = require('../controller/comentarioController');
const route = express.Router();

route
    .post('/', comentarioController.create)
    .delete('/remove/:id', comentarioController.remove)
    .get('/GetAll', comentarioController.GetAll)
    .get('/GetById/:id', comentarioController.GetById)

module.exports = route;