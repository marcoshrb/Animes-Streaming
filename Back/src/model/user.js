
class User {

    init(conexao) {
        this.conexao = conexao;
        this.createUser();
    }

    createUser() {

        const sql =
            `
            create table if not exists Usuario (
                Id int primary key not null AUTO_INCREMENT,
                Nome varchar(255) not null,
                Email varchar(200) not null,
                Senha varchar(100) not null,
                IsAdmin boolean DEFAULT FALSE
            );
            `;

        this.conexao.query(sql, (error) => {
            if(error) {
                console.log("Algo deu ruim");
                console.log(error.message);
                return;
            }
        });
    }
}

module.exports = new User();