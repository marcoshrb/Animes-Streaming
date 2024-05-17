
class Video {

    init(conexao) {
        this.conexao = conexao;
        this.createVideo();
    }

    createVideo() {

        const sql =
            `
            create table if not exists Video (
                Id int primary key not null AUTO_INCREMENT,
                Titulo varchar(255) not null,
                Descricao varchar(255) not null,
                URL text not null
            );
            `;

        this.conexao.query(sql, (error) => {
            if(error) {
                console.log("Algo deu ruim");
                console.log(error.message);
                return;
            }
            console.log("Tabela de Video criada com sucesso!");
        });
    }
}

module.exports = new Video();