const ClausulaWhere = require("../../Util/ClausulaWhere/ClausulaWhere");
const Condicao = require("../../Util/ClausulaWhere/Condicao");
const UsuarioDAO = require("./UsuarioDAO")

module.exports = class UsuarioService {
    async salvar(pUsuario) {
        const dao = new UsuarioDAO();

        let retorno;

        if (pUsuario.getSeqUsuario()) {
            retorno = await dao.atualizar(pUsuario);
        } else {
            retorno = await dao.inserir(pUsuario);
        }

        return retorno;
    }

    async listar() {
        const dao = new UsuarioDAO();

        const retorno = await dao.listar();

        return retorno;
    }

    async validarAcesso(pUsuario) {
        const dao = new UsuarioDAO();
        const clausula = new ClausulaWhere();

        let condicao = new Condicao();
        condicao.setOperacao("WHERE");
        condicao.setCampo("email");
        condicao.setSinal("IGUAL");
        condicao.setValor(pUsuario.getEmail());
        condicao.setTipo("TEXTO");
        clausula.adicionarCondicao(condicao);

        condicao = new Condicao();
        condicao.setOperacao("AND");
        condicao.setCampo("senha");
        condicao.setSinal("IGUAL");
        condicao.setValor(pUsuario.getSenha());
        condicao.setTipo("TEXTO");
        clausula.adicionarCondicao(condicao);

        const retorno = await dao.listar(clausula);

        return retorno[0];
    }
}