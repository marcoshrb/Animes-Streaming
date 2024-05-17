const conexao = require('../../connection');

class SerieEpisodioController {

    static async create(req, res) {
        try {
            const { SerieId, VideoId, Numero_Ep, Temporada } = req.body;
            
            if (!SerieId || !VideoId || !Numero_Ep || !Temporada) {
                return res.status(400).json({ message: "Todos os campos são obrigatórios." });
            }
    
            // Verifica se a série e o vídeo existem antes de criar o registro de episódio
            conexao.query('SELECT * FROM Serie WHERE Id = ?', [SerieId], (error, serieResults) => {
                if (error) {
                    console.error(error);
                    return res.status(500).send({ message: "Erro ao verificar a série." });
                }
                
                if (serieResults.length === 0) {
                    return res.status(422).send({ message: "Série não encontrada." });
                }

                conexao.query('SELECT * FROM Video WHERE Id = ?', [VideoId], (error, videoResults) => {
                    if (error) {
                        console.error(error);
                        return res.status(500).send({ message: "Erro ao verificar o vídeo." });
                    }
                    
                    if (videoResults.length === 0) {
                        return res.status(422).send({ message: "Vídeo não encontrado." });
                    }

                    const serieEpisodio = {
                        SerieId: SerieId,
                        VideoId: VideoId,
                        Numero_Ep: Numero_Ep,
                        Temporada: Temporada
                    };
        
                    conexao.query('INSERT INTO Serie_Episodio SET ?', serieEpisodio, (error, results) => {
                        if (error) {
                            console.error(error);
                            return res.status(500).send({ message: "Erro ao criar o registro de episódio." });
                        }
                        return res.status(201).send({ message: "Registro de episódio criado com sucesso." });
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

        conexao.query('DELETE FROM Serie_Episodio WHERE id = ?', [id], (error, results) => {
            if (error) {
                console.error(error);
                return res.status(500).send({ message: "Erro ao excluir o registro de episódio." });
            }
            return res.status(200).send({ message: "Registro de episódio excluído com sucesso." });
        });
    }

    static async GetAll(req, res) {
        conexao.query('SELECT * FROM Serie_Episodio', (error, results) => {
            if (error) {
                console.error(error);
                return res.status(500).send({ message: "Erro ao buscar os registros de episódio." });
            }
            if (results.length === 0) {
                return res.status(404).send({ message: "Nenhum registro de episódio encontrado." });
            }
            return res.status(200).send({ serieEpisodio: results });
        });
    }

    static async GetById(req, res) {
        const { id } = req.params;

        if (!id)
            return res.status(400).send({ message: "Nenhum ID fornecido." });

        conexao.query('SELECT * FROM Serie_Episodio WHERE Id = ?', [id], async (error, results) => {
            if (error) {
                console.error(error);
                return res.status(500).send({ message: "Erro ao realizar a consulta." });
            }

            if (results.length === 0) {
                return res.status(422).send({ message: "Registro de episódio não encontrado." });
            }

            const serieEpisodio = results[0];
            return res.status(200).send({ SerieEpisodio: serieEpisodio });
            
        });
    }
}

module.exports = SerieEpisodioController;
