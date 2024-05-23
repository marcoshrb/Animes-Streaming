const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const CryptoJS = require("crypto-js");
const conexao = require('../../connection');
const dotenv = require('dotenv');
dotenv.config()

class UserController {

    static async login(req, res) {

        var bytes = CryptoJS.AES.decrypt(req.body.jsonCrypt, process.env.SECRET);
        const decryptd = bytes.toString(CryptoJS.enc.Utf8);
        const json = JSON.parse(decryptd);

        const { login, password } = json;

        
        if (!login)
            return res.status(422).json({ message: "O login é obrigatório." });
        
        if (!password)
            return res.status(422).json({ message: "A senha é obrigatória." });
        
        conexao.query('SELECT * FROM usuario WHERE Email = ?', [login], async (error, results) => {
            
            if (error) {
                console.error(error);
                return res.status(500).send({ message: "Erro ao realizar a consulta." });
            }

            if (results.length === 0) {
                return res.status(422).send({ message: "Usuário não encontrado." });
            }

            const user = results[0];

            const validPassword = await bcrypt.compare(password, user.Senha);

            if (!validPassword) {
                return res.status(422).send({ message: "Login ou senha inválidos." });
            }

            try {
                const token = jwt.sign(
                    {
                        Id: user.Id,
                        IsAdmin: user.IsAdmin
                    },
                    process.env.SECRET,
                    {
                        expiresIn: '2 days'
                    },
                );

                return res.status(200).send({ token, userId: user.Id });
            } catch (error) {
                console.error(error);
                return res.status(500).send({ message: "Erro ao gerar o token JWT." });
            }
        });
    }

    static async register(req, res) {
        try {

            var bytes = CryptoJS.AES.decrypt(req.body.jsonCrypt, process.env.SECRET);
            const decryptd = bytes.toString(CryptoJS.enc.Utf8);
            const json = JSON.parse(decryptd);
            
            const { name, email, password, confirmPassword } = json;
            
            if (!name || !email || !password || !confirmPassword) {
                return res.status(400).json({ message: "Todos os campos são obrigatórios." });
            }
            
            if (password !== confirmPassword) {
                return res.status(400).json({ message: "As senhas não coincidem." });
            }
            
            // Hash da senha
            const hashedPassword = await bcrypt.hash(password, 10);
    
            conexao.query('SELECT * FROM Usuario WHERE email = ?', [email], (error, results) => {
                if (error) {
                    console.error(error);
                    return res.status(500).send({ message: "Erro ao verificar o usuário." });
                }
                
                if (results.length > 0) {
                    return res.status(500).send({ message: "E-mail já cadastrado." });
                }
                
                const user = {
                    Nome : name,
                    Email: email,
                    Senha: hashedPassword,
                    IsAdmin: email === 'adm@adm'
                };
    
                conexao.query('INSERT INTO Usuario SET ?', user, (error, results) => {
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

        conexao.query('DELETE FROM Usuario WHERE id = ?', [id], (error, results) => {
            if (error) {
                console.error(error);
                return res.status(500).send({ message: "Erro ao excluir o usuário." });
            }
            return res.status(200).send({ message: "Usuário excluído com sucesso." });
        });
    }

    static async GetAll(req, res) {
        conexao.query('SELECT * FROM Usuario', (error, results) => {
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

    static async GetById(req, res) {
        const { id } = req.params;
    
        if (!id)
            return res.status(400).send({ message: "Nenhum ID fornecido." });
    
        conexao.query('SELECT * FROM Usuario WHERE Id = ?', [id], async (error, result) => {
            if (error) {
                console.error(error);
                return res.status(500).send({ message: "Erro ao realizar a consulta." });
            }
    
            if (result.length === 0) {
                return res.status(422).send({ message: "Nenhum usuario encontrado para este ID." });
            }
    
            return res.status(200).send({ user: result });
            
        });
    }
}

module.exports = UserController;
