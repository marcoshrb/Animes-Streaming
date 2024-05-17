const express = require('express');
const serieEpisodioController = require('../controller/serieEpisodioController');
const route = express.Router();

route
    .post('/', serieEpisodioController.create)
    .delete('/remove/:id', serieEpisodioController.remove)
    .get('/register', serieEpisodioController.GetAll)
    .get('/register', serieEpisodioController.GetById)

module.exports = route;