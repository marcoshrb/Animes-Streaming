const express = require('express');

const user = require('../src/routes/user');
const assistir = require('../src/routes/assistir');
const comentario = require('../src/routes/comentario');
const filme = require('../src/routes/filme');
const serie = require('../src/routes/serie');
const serieEpisodio = require('../src/routes/serieEpisodio');
const video = require('../src/routes/video');
const foto = require('../src/routes/fotoUsuario')

module.exports = function(app) {
    app
        .use(express.json())
        .use('/user', user)
        .use('/assistir', assistir)
        .use('/comentario', comentario)
        .use('/filme', filme)
        .use('/serie', serie)
        .use('/serieEpisodio', serieEpisodio)
        .use('/video', video)
        .use('/foto', foto)
}