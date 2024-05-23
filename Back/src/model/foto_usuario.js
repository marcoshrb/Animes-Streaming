
class Foto {

    init(conexao) {
        this.conexao = conexao;
        this.createFoto();
    }

    createFoto() {

        const sql =
            `
            create table if not exists Foto(
            Id INT PRIMARY KEY AUTO_INCREMENT,
            UserId INT NOT NULL,
            ImagePath VARCHAR(255) NOT NULL,
            FOREIGN KEY (UserId) REFERENCES Usuario(Id)
            );
            `;

        this.conexao.query(sql, (error) => {
            if (error) {
                console.log("Algo deu ruim");
                console.log(error.message);
                return;
            }
        });
    }
}

module.exports = new Foto();