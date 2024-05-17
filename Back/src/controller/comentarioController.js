const conexao = require('../../connection');

class ComentarioController {

    static async create(req, res) {
        try {
            const { UserId, VideoId, Conteudo } = req.body;
            
            if (!UserId || !VideoId || !Conteudo) {
                return res.status(400).json({ message: "Todos os campos são obrigatórios." });
            }
    
            // Verifica se o usuário e o vídeo existem antes de criar o comentário
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

                    const comentario = {
                        UserId: UserId,
                        VideoId: VideoId,
                        Conteudo: Conteudo
                    };
        
                    conexao.query('INSERT INTO Comentario SET ?', comentario, (error, results) => {
                        if (error) {
                            console.error(error);
                            return res.status(500).send({ message: "Erro ao criar o comentário." });
                        }
                        return res.status(201).send({ message: "Comentário criado com sucesso." });
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

        conexao.query('DELETE FROM Comentario WHERE id = ?', [id], (error, results) => {
            if (error) {
                console.error(error);
                return res.status(500).send({ message: "Erro ao excluir o comentário." });
            }
            return res.status(200).send({ message: "Comentário excluído com sucesso." });
        });
    }

    static async GetAll(req, res) {
        conexao.query('SELECT * FROM Comentario', (error, results) => {
            if (error) {
                console.error(error);
                return res.status(500).send({ message: "Erro ao buscar os comentários." });
            }
            if (results.length === 0) {
                return res.status(404).send({ message: "Nenhum comentário encontrado." });
            }
            return res.status(200).send({ comentarios: results });
        });
    }

    static async GetById(req, res) {
        const { id } = req.params;

        if (!id)
            return res.status(400).send({ message: "Nenhum ID fornecido." });

        conexao.query('SELECT * FROM Comentario WHERE Id = ?', [id], async (error, results) => {
            if (error) {
                console.error(error);
                return res.status(500).send({ message: "Erro ao realizar a consulta." });
            }

            if (results.length === 0) {
                return res.status(422).send({ message: "Comentário não encontrado." });
            }

            const comentario = results[0];
            return res.status(200).send({ Comentario: comentario });
            
        });
    }
}

module.exports = ComentarioController;
