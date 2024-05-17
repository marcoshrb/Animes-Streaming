const express = require('express');
const filmeController = require('../controller/filmeController');
const route = express.Router();

route
    .post('/', filmeController.create)
    .delete('/remove/:id', filmeController.remove)
    .get('/register', filmeController.GetAll)
    .get('/register', filmeController.GetById)

module.exports = route;