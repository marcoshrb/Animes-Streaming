
class Assistir {

    init(conexao) {
        this.conexao = conexao;
        this.createAssistir();
    }

    createAssistir() {

        const sql =
            `
            create table if not exists Assistir (
                Id int primary key not null AUTO_INCREMENT,
                UserId INT not null,
                VideoId INT not null,
                FOREIGN KEY (UserId) REFERENCES Usuario(Id),
                FOREIGN KEY (VideoId) REFERENCES Video(Id)
            );
            `;

        this.conexao.query(sql, (error) => {
            if(error) {
                console.log("Algo deu ruim");
                console.log(error.message);
                return;
            }
            console.log("Tabela de Assistir criada com sucesso!");
        });
    }
}

module.exports = new Assistir();