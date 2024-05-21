const express = require('express');
const videoController = require('../controller/videoController');
const route = express.Router();

route
    .post('/', videoController.create)
    .delete('/remove/:id', videoController.remove)
    .get('/GetAll', videoController.GetAll)
    .get('/GetById/:id', videoController.GetById)

module.exports = route;