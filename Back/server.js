const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config()

const router = require('./startup/routes');
const conexao = require('./connection');
const User = require("./src/model/user");
const port = process.env.API_PORT;

app.use(cors({
  origin: '*'
}));

// User.init(conexao);

router(app);
 
app.listen(port, (error) => {
  if(error) {
    console.log("Deu erro");
    return;
  }
  console.log(`Acesse: http://localhost:${port}/`)
});
