const express = require('express');
const comentarioController = require('../controller/comentarioController');
const route = express.Router();

route
    .post('/', comentarioController.create)
    .delete('/remove/:id', comentarioController.remove)
    .get('/register', comentarioController.GetAll)
    .get('/register', comentarioController.GetById)

module.exports = route;