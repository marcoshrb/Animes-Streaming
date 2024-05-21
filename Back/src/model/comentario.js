
class Comentario {

    init(conexao) {
        this.conexao = conexao;
        this.createComentario();
    }

    createComentario() {

        const sql =
            `
            create table if not exists Comentario (
                Id int primary key not null AUTO_INCREMENT,
                UserId int not null,
                VideoId int not null,
                Conteudo varchar(255) not null,
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
        });
    }
}

module.exports = new Comentario();