const express = require('express');
const videoController = require('../controller/videoController');
const route = express.Router();

route
    .post('/', videoController.create)
    .delete('/remove/:id', videoController.remove)
    .get('/register', videoController.GetAll)
    .get('/register', videoController.GetById)

module.exports = route;