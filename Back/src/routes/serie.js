const express = require('express');
const serieController = require('../controller/serieController');
const route = express.Router();

route
    .post('/', serieController.create)
    .delete('/remove/:id', serieController.remove)
    .get('/register', serieController.GetAll)
    .get('/register', serieController.GetById)

module.exports = route;