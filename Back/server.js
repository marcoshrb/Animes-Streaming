const express = require('express');
const mysql = require('mysql');
 
const app = express();
 
// Configuração da conexão MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'seu_usuario',
    password: 'sua_senha',
    database: 'nome_do_banco_de_dados'
  });

// Conectar ao MySQL
connection.connect();
 
require('./startup/routes')(app);
 
const port = 8080;
 
app.listen(port, () => console.log(`Acesse: http://localhost:${port}/`));