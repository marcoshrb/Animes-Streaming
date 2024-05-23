const express = require('express');
const multer = require('multer');
const path = require('path');
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
const Foto = require("./src/model/foto_usuario")

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'upload/'); // Diretório onde as imagens serão salvas
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

app.use(cors({
  origin: '*'
}));

app.use('/upload', express.static(path.join(__dirname, 'upload'))); // Serve os arquivos estáticos da pasta uploads

// Upload na pasta upload
app.post('/upload', upload.single('image'), (req, res) => {
  const fotoController = require('.controller/fotoController'); 
  fotoController.upload(req, res);
});

User.init(conexao);
Assistir.init(conexao);
Comentario.init(conexao);
Filme.init(conexao);
SerieEp.init(conexao);
Serie.init(conexao);
Video.init(conexao);
Foto.init(conexao);

router(app);
 
app.listen(port, (error) => {
  if(error) {
    console.log("Deu erro");
    return;
  }
  console.log(`Acesse: http://localhost:${port}/`)
});
