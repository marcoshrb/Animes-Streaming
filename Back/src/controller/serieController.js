const conexao = require('../../connection');

class serieController {

    static async create(req, res) {

        try {
            
            const { Nome } = req.body;
            
            if ( !Nome ) {
                return res.status(400).json({ message: "O Nome é obrigatório." });
            }
    
            conexao.query('SELECT * FROM Serie WHERE Nome = ?', [Nome], (error, results) => {
                if (error) {
                    console.error(error);
                    return res.status(500).send({ message: "Erro ao verificar o usuário." });
                }
                
                if (results.length > 0) {
                    return res.status(422).send({ message: "Nome já cadastrado." });
                }
                
                const serie = {
                    Nome: Nome
                };
    
                conexao.query('INSERT INTO Serie SET ?', serie, (error, results) => {
                    if (error) {
                        console.error(error);
                        return res.status(500).send({ message: "Erro ao cadastrar a serie." });
                    }
                    return res.status(201).send({ message: "Serie cadastrada com sucesso." });
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

        conexao.query('DELETE FROM Serie WHERE id = ?', [id], (error, results) => {
            if (error) {
                console.error(error);
                return res.status(500).send({ message: "Erro ao excluir a serie." });
            }
            return res.status(200).send({ message: "Serie excluída com sucesso." });
        });
    }

    static async GetAll(req, res) {
        conexao.query('SELECT * FROM Serie', (error, results) => {
            if (error) {
                console.error(error);
                return res.status(500).send({ message: "Erro ao buscar as series." });
            }
            if (results.length === 0) {
                return res.status(404).send({ message: "Nenhuma Serie encontrado." });
            }
            return res.status(200).send({ series: results });
        });
    }

    static async GetById(req, res) {
        const { id } = req.params;

        if (!id)
            return res.status(400).send({ message: "Nenhum ID fornecido." });

        conexao.query('SELECT * FROM Serie WHERE Id = ?', [id], async (error, results) => {
            if (error) {
                console.error(error);
                return res.status(500).send({ message: "Erro ao realizar a consulta." });
            }

            if (results.length === 0) {
                return res.status(422).send({ message: "Serie não encontrada." });
            }

            const serie = results[0];
            return res.status(200).send({ Series : serie });
            
        });
    }
}

module.exports = serieController;
