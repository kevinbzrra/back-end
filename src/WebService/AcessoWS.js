const Usuario = require("../Model/Usuario/Usuario");
const UsuarioService = require("../Model/Usuario/UsuarioService");
const Router = require("express").Router;

module.exports = class AcessoWS {
    #router = Router();

    getRouter() {
        return this.#router;
    }

    montar() {
        const usuarioService = new UsuarioService();

        this.getRouter().get("/validar_acesso", async (req, res) => {
            const { email, senha } = req.query;

            const usuario = new Usuario();

            usuario.setEmail(email);
            usuario.setSenha(senha);

            const retorno = await usuarioService.validarAcesso(usuario);

            console.log(retorno);

            res.json(retorno);
        })

        return this.getRouter();
    }
}