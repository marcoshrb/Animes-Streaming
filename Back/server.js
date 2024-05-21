const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config()

const router = require('./startup/routes');
const conexao = require('./connection');
const port = process.env.API_PORT;

// Models
const User = require("./src/model/user");
const Assistir = require("./src/model/assistir");
const Comentario = require("./src/model/comentario");
const Filme = require("./src/model/filme");
const SerieEp = require("./src/model/serie_episodio");
const Serie = require("./src/model/serie");
const Video = require("./src/model/video");

app.use(cors({
  origin: '*'
}));

User.init(conexao);
Assistir.init(conexao);
Comentario.init(conexao);
Filme.init(conexao);
SerieEp.init(conexao);
Serie.init(conexao);
Video.init(conexao);

router(app);
 
app.listen(port, (error) => {
  if(error) {
    console.log("Deu erro");
    return;
  }
  console.log(`Acesse: http://localhost:${port}/`)
});
