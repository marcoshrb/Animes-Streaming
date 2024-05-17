
class Filme {

    init(conexao) {
        this.conexao = conexao;
        this.createFilme();
    }

    createFilme() {

        const sql =
            `
            create table if not exists Filme(
                Id int primary key not null AUTO_INCREMENT,
                VideoId INT not null,
                FOREIGN KEY (VideoId) REFERENCES Video(Id)
            );
            `;

        this.conexao.query(sql, (error) => {
            if(error) {
                console.log("Algo deu ruim");
                console.log(error.message);
                return;
            }
            console.log("Tabela de Filme criada com sucesso!");
        });
    }
}

module.exports = new Filme();