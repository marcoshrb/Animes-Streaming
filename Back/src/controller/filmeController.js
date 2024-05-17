const conexao = require('../../connection');

class FilmeController {

    static async create(req, res) {
        try {
            const { VideoId } = req.body;
            
            if (!VideoId) {
                return res.status(400).json({ message: "O campo VideoId é obrigatório." });
            }
    
            // Verifica se o vídeo existe antes de criar o registro de filme
            conexao.query('SELECT * FROM Video WHERE Id = ?', [VideoId], (error, videoResults) => {
                if (error) {
                    console.error(error);
                    return res.status(500).send({ message: "Erro ao verificar o vídeo." });
                }
                
                if (videoResults.length === 0) {
                    return res.status(422).send({ message: "Vídeo não encontrado." });
                }

                const filme = {
                    VideoId: VideoId
                };
        
                conexao.query('INSERT INTO Filme SET ?', filme, (error, results) => {
                    if (error) {
                        console.error(error);
                        return res.status(500).send({ message: "Erro ao criar o registro de filme." });
                    }
                    return res.status(201).send({ message: "Registro de filme criado com sucesso." });
                });
            });
        } catch (error) {
            console.error(error);
            return res.status(500).send({ message: "Erro ao processar a solicitação." });
        }
    }
    
    static async remove(req, res) {
        const { id } = req.params;
        if (!id)
            return res.status(400).send({ message: "Nenhum ID fornecido." });

        conexao.query('DELETE FROM Filme WHERE id = ?', [id], (error, results) => {
            if (error) {
                console.error(error);
                return res.status(500).send({ message: "Erro ao excluir o registro de filme." });
            }
            return res.status(200).send({ message: "Registro de filme excluído com sucesso." });
        });
    }

    static async GetAll(req, res) {
        conexao.query('SELECT * FROM Filme', (error, results) => {
            if (error) {
                console.error(error);
                return res.status(500).send({ message: "Erro ao buscar os registros de filme." });
            }
            if (results.length === 0) {
                return res.status(404).send({ message: "Nenhum registro de filme encontrado." });
            }
            return res.status(200).send({ filmes: results });
        });
    }

    static async GetById(req, res) {
        const { id } = req.params;

        if (!id)
            return res.status(400).send({ message: "Nenhum ID fornecido." });

        conexao.query('SELECT * FROM Filme WHERE Id = ?', [id], async (error, results) => {
            if (error) {
                console.error(error);
                return res.status(500).send({ message: "Erro ao realizar a consulta." });
            }

            if (results.length === 0) {
                return res.status(422).send({ message: "Registro de filme não encontrado." });
            }

            const filme = results[0];
            return res.status(200).send({ Filme: filme });
            
        });
    }
}

module.exports = FilmeController;
