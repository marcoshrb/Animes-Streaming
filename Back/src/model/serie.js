
class Serie {

    init(conexao) {
        this.conexao = conexao;
        this.createSerie();
    }

    createSerie() {

        const sql =
            `
            create table if not exists Serie (
                Id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
                Nome varchar(255) not null
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

module.exports = new Serie();