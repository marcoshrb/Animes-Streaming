const express = require('express');
const fotoController = require('../controller/fotoController')
const route = express.Router();

route 
    .post('/upload', fotoController.upload)

module.exports = route;