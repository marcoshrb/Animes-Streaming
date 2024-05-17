
class SerieEp {

    init(conexao) {
        this.conexao = conexao;
        this.Serie_Episodio();
    }

    Serie_Episodio() {

        const sql =
            `
            create table if not exists Serie_Episodio (
                Id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
                SerieId INT NOT NULL,
                VideoId INT NOT NULL,
                Numero_Ep INT NOT NULL,
                Temporada INT NOT NULL,
                FOREIGN KEY (SerieId) REFERENCES Serie(Id),
                FOREIGN KEY (VideoId) REFERENCES Video(Id)
            );
            `;

        this.conexao.query(sql, (error) => {
            if(error) {
                console.log("Algo deu ruim");
                console.log(error.message);
                return;
            }
            console.log("Tabela de Serie-Ep criada com sucesso!");
        });
    }
}

module.exports = new SerieEp();