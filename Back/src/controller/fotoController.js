const conexao = require("../../connection");
const path = require('path');

class fotoController {
    static async upload(req, res){
        if (!req.file) {
            return res.status(400).send({ message: 'Nenhum arquivo' });
          }
          const userId = req.body.userId;
          const imageUrl = `http://localhost:8080/foto/upload/${req.file.filename}`;
        
          const query = 'INSERT INTO Foto (UserId, ImagePath) VALUES (?, ?)';
          conexao.query(query, [userId, imageUrl], (error, results) => {
            if (error) {
              console.error(error);
              return res.status(500).send({ message: 'Erro ao salvar a imagem no banco de dados.' });
            }
            res.send({
              imageUrl: imageUrl
            });
          });
    }
}

module.exports = fotoController;