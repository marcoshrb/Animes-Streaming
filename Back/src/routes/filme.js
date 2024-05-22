const express = require('express');
const filmeController = require('../controller/filmeController');
const route = express.Router();

route
    .post('/', filmeController.create)
    .delete('/remove/:id', filmeController.remove)
    .get('/getAll', filmeController.GetAll)
    .get('/getById/:id', filmeController.GetById)
    .get('/getByVideoId/:videoId', filmeController. GetByVideoId)

module.exports = route;