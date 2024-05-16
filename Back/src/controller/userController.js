const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const CryptoJS = require("crypto-js");
const conexao = require('../../connection');
const dotenv = require('dotenv');
dotenv.config()

class UserController {

    static async login(req, res) {

        // var bytes = CryptoJS.AES.decrypt(req.body.jsonCrypt, process.env.SECRET);
        // const decryptd = bytes.toString(CryptoJS.enc.Utf8);
        // const json = JSON.parse(decryptd);

        const { login, password } = req.body;

        if (!login)
            return res.status(422).json({ message: "O login é obrigatório." });

        if (!password)
            return res.status(422).json({ message: "A senha é obrigatória." });

        // Consulta ao banco de dados para encontrar o usuário
        conexao.query('SELECT * FROM users WHERE login = ?', [login], async (error, results) => {
            if (error) {
                console.error(error);
                return res.status(500).send({ message: "Erro ao realizar a consulta." });
            }

            if (results.length === 0) {
                return res.status(422).send({ message: "Usuário não encontrado." });
            }

            const user = results[0];

            // Comparar a senha fornecida com a senha do banco de dados
            const validPassword = await bcrypt.compare(password, user.password);
            if (!validPassword) {
                return res.status(422).send({ message: "Login ou senha inválidos." });
            }

            // Gerar token JWT
            try {
                const token = jwt.sign(
                    {
                        id: user.id,
                        adm: user.adm
                    },
                    process.env.SECRET,
                    {
                        expiresIn: '2 days'
                    },
                );

                return res.status(200).send({ token });
            } catch (error) {
                console.error(error);
                return res.status(500).send({ message: "Erro ao gerar o token JWT." });
            }
        });
    }

    static async register(req, res) {
        try {
            // var bytes = CryptoJS.AES.decrypt(req.body.jsonCrypt, process.env.SECRET);
            // const decryptd = bytes.toString(CryptoJS.enc.Utf8);
            // const json = JSON.parse(decryptd);
            
            const { name, email, password, confirmPassword } = req.body;
            
            // Verificar se todos os campos necessários foram fornecidos
            if (!name || !email || !password || !confirmPassword) {
                return res.status(400).json({ message: "Todos os campos são obrigatórios." });
            }
            
            // Verificar se as senhas coincidem
            if (password !== confirmPassword) {
                return res.status(400).json({ message: "As senhas não coincidem." });
            }
            
            // Hash da senha
            const hashedPassword = await bcrypt.hash(password, 10);
    

            // Verificar se o usuário já existe no banco de dados
            conexao.query('SELECT * FROM users WHERE login = ?', [email], (error, results) => {
                if (error) {
                    console.error(error);
                    return res.status(500).send({ message: "Erro ao verificar o usuário." });
                }
                
                if (results.length > 0) {
                    return res.status(422).send({ message: "E-mail já cadastrado." });
                }
                
                // Inserir novo usuário no banco de dados
                const user = {
                    login: email,
                    password: hashedPassword,
                    adm: email === 'adm@adm' // Definir se é um usuário administrador
                };
    
                conexao.query('INSERT INTO users SET ?', user, (error, results) => {
                    if (error) {
                        console.error(error);
                        return res.status(500).send({ message: "Erro ao cadastrar o usuário." });
                    }
                    return res.status(201).send({ message: "Usuário cadastrado com sucesso." });
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

        // Excluir usuário do banco de dados
        conexao.query('DELETE FROM users WHERE id = ?', [id], (error, results) => {
            if (error) {
                console.error(error);
                return res.status(500).send({ message: "Erro ao excluir o usuário." });
            }
            return res.status(200).send({ message: "Usuário excluído com sucesso." });
        });
    }

    static async GetAll(req, res) {
        // Obter todos os usuários do banco de dados
        conexao.query('SELECT * FROM users', (error, results) => {
            if (error) {
                console.error(error);
                return res.status(500).send({ message: "Erro ao buscar os usuários." });
            }
            if (results.length === 0) {
                return res.status(404).send({ message: "Nenhum usuário encontrado." });
            }
            return res.status(200).send({ users: results });
        });
    }
}

module.exports = UserController;
