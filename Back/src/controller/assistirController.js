const conexao = require('../../connection');

class AssistirController {

    static async create(req, res) {
        try {
            const { UserId, VideoId } = req.body;
            
            if (!UserId || !VideoId) {
                return res.status(400).json({ message: "Todos os campos são obrigatórios." });
            }
    
            // Verifica se o usuário e o vídeo existem antes de criar o registro
            conexao.query('SELECT * FROM Usuario WHERE Id = ?', [UserId], (error, userResults) => {
                if (error) {
                    console.error(error);
                    return res.status(500).send({ message: "Erro ao verificar o usuário." });
                }
                
                if (userResults.length === 0) {
                    return res.status(422).send({ message: "Usuário não encontrado." });
                }

                conexao.query('SELECT * FROM Video WHERE Id = ?', [VideoId], (error, videoResults) => {
                    if (error) {
                        console.error(error);
                        return res.status(500).send({ message: "Erro ao verificar o vídeo." });
                    }
                    
                    if (videoResults.length === 0) {
                        return res.status(422).send({ message: "Vídeo não encontrado." });
                    }

                    const assistir = {
                        UserId: UserId,
                        VideoId: VideoId
                    };
        
                    conexao.query('INSERT INTO Assistir SET ?', assistir, (error, results) => {
                        if (error) {
                            console.error(error);
                            return res.status(500).send({ message: "Erro ao criar o registro de assistir." });
                        }
                        return res.status(201).send({ message: "Registro de assistir criado com sucesso." });
                    });
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

        conexao.query('DELETE FROM Assistir WHERE id = ?', [id], (error, results) => {
            if (error) {
                console.error(error);
                return res.status(500).send({ message: "Erro ao excluir o registro de assistir." });
            }
            return res.status(200).send({ message: "Registro de assistir excluído com sucesso." });
        });
    }

    static async GetAll(req, res) {
        conexao.query('SELECT * FROM Assistir', (error, results) => {
            if (error) {
                console.error(error);
                return res.status(500).send({ message: "Erro ao buscar os registros de assistir." });
            }
            if (results.length === 0) {
                return res.status(404).send({ message: "Nenhum registro de assistir encontrado." });
            }
            return res.status(200).send({ assistir: results });
        });
    }

    static async GetById(req, res) {
        const { id } = req.params;

        if (!id)
            return res.status(400).send({ message: "Nenhum ID fornecido." });

        conexao.query('SELECT * FROM Assistir WHERE Id = ?', [id], async (error, results) => {
            if (error) {
                console.error(error);
                return res.status(500).send({ message: "Erro ao realizar a consulta." });
            }

            if (results.length === 0) {
                return res.status(422).send({ message: "Registro de assistir não encontrado." });
            }

            const assistir = results[0];
            return res.status(200).send({ Assistir: assistir });
            
        });
    }
}

module.exports = AssistirController;
