const Database = require("../../database/Database");

module.exports = class UsuarioDAO {
    async inserir(pUsuario) {
        const database = new Database();

        const query = "INSERT INTO usuario\n"
            + "(nome, senha, email, chave, data_cadastro)\n"
            + "VALUES\n"
            + "($1, $2, $3, $4, current_date)\n"
            + "RETURNING *"

        console.log(query);

        const retorno = await database.getClient().query(
            query,
            [
                pUsuario.getNome(),
                pUsuario.getSenha(),
                pUsuario.getEmail(),
                pUsuario.getChave(),
            ]
        );

        return retorno.rows[0];
    }

    async listar(pClausula) {
        const database = new Database();

        let retorno;
        let query;

        query = "SELECT * FROM usuario";

        if (pClausula) {
            query = query + pClausula.getCondicao();
        }

        console.log(query);

        retorno = await database.getClient().query(query);

        return retorno.rows;
    }

    async atualizar(pUsuario) {
        const database = new Database();

        const query = "UPDATE usuario SET\n"
            + "nome = '" + pUsuario.getNome() + "',\n"
            + "senha = '" + pUsuario.getSenha() + "'\n"
            + "email = '" + pUsuario.getEmail() + "'\n"
            + "chave = '" + pUsuario.getChave() + "'\n"
            + "WHERE seq_usuario = " + pUsuario.getSeqUsuario() + "\n"
            + "RETURNING *"

        console.log(query);

        const retorno = await database.getClient().query(query);

        console.log("retorno -> ", retorno);

        return retorno.rows[0];
    }

    async deletar(pUsuario) {
        const database = new Database();

        await database.getClient().query(
            "DELETE FROM usuario WHERE seq_usuario = " + pUsuario.getSeqUsuario()
        );
    }
}
