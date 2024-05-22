const conexao = require('../../connection');

class videoController {

    static async create(req, res) {

        try {
            
            const { Titulo, Descricao, URL } = req.body;
            console.log(req.body)
            
            if (!Titulo || !Descricao || !URL ) {
                return res.status(400).json({ message: "Todos os campos são obrigatórios." });
            }
    
            conexao.query('SELECT * FROM Video WHERE Titulo = ?', [Titulo], (error, results) => {
                if (error) {
                    console.error(error);
                    return res.status(500).send({ message: "Erro ao verificar o usuário." });
                }
                
                if (results.length > 0) {
                    return res.status(422).send({ message: "Titulo já cadastrado." });
                }
                
                const video = {
                    Titulo: Titulo,
                    Descricao: Descricao,
                    URL: URL
                };
    
                conexao.query('INSERT INTO Video SET ?', video, (error, results) => {
                    if (error) {
                        console.error(error);
                        return res.status(500).send({ message: "Erro ao cadastrar o video." });
                    }
                
                    const videoId = results.insertId;
                    return res.status(201).send({ 
                        message: "Video cadastrado com sucesso.",
                        videoId: videoId
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

        conexao.query('DELETE FROM Video WHERE id = ?', [id], (error, results) => {
            if (error) {
                console.error(error);
                return res.status(500).send({ message: "Erro ao excluir o video." });
            }
            return res.status(200).send({ message: "Video excluído com sucesso." });
        });
    }

    static async GetAll(req, res) {
        conexao.query('SELECT * FROM Video', (error, results) => {
            if (error) {
                console.error(error);
                return res.status(500).send({ message: "Erro ao buscar os videos." });
            }
            if (results.length === 0) {
                return res.status(404).send({ message: "Nenhum Video encontrado." });
            }
            return res.status(200).send({ video: results });
        });
    }

    static async GetById(req, res) {
        const { id } = req.params;

        if (!id)
            return res.status(400).send({ message: "Nenhum ID fornecido." });

        conexao.query('SELECT * FROM Video WHERE Id = ?', [id], async (error, results) => {
            if (error) {
                console.error(error);
                return res.status(500).send({ message: "Erro ao realizar a consulta." });
            }

            if (results.length === 0) {
                return res.status(422).send({ message: "Video não encontrado." });
            }

            const video = results[0];
            return res.status(200).send( video );
            
        });
    }

    static async GetByTitle(req, res) {

        const { TitleVideo } = req.params;  
    
        if (!TitleVideo)
            return res.status(400).send({ message: "Nenhum título fornecido." });
    
        conexao.query('SELECT * FROM Video WHERE Titulo = ?', [TitleVideo], async (error, results) => {
            if (error) {
                console.error(error);
                return res.status(500).send({ message: "Erro ao realizar a consulta." });
            }
    
            if (results.length === 0) {
                return res.status(422).send({ message: "Título de vídeo não encontrado." });
            }
    
            const video = results[0];
            return res.status(200).send(video);
        });
    }
    
}

module.exports = videoController;
