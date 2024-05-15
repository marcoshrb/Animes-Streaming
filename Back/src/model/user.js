
class User {

    init(conexao) {
        this.conexao = conexao;
        this.createUser();
    }

    createUser() {

        const sql =
            `
            CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            login VARCHAR(255) NOT NULL,
            password VARCHAR(255) NOT NULL,
            adm BOOLEAN DEFAULT FALSE
        );
            `;

        this.conexao.query(sql, (error) => {
            if(error) {
                console.log("Algo deu ruim");
                console.log(error.message);
                return;
            }
            console.log("Tabela de User criada com sucesso!");
        });
    }
}

module.exports = new User();