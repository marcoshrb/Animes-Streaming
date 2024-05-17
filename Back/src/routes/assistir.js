const express = require('express');
const assistirController = require('../controller/assistirController');
const route = express.Router();

route
    .post('/', assistirController.create)
    .delete('/remove/:id', assistirController.remove)
    .get('/register', assistirController.GetAll)
    .get('/register', assistirController.GetById)

module.exports = route;