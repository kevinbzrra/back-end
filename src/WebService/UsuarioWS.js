const Usuario = require("../Model/Usuario/Usuario");
const UsuarioService = require("../Model/Usuario/UsuarioService");
const Util = require("../Util/Util");
const Router = require("express").Router;

module.exports = class UsuarioWS {
    #router = Router();

    getRouter() {
        return this.#router;
    }

    montar() {
        const usuarioService = new UsuarioService();
        const util = new Util();

        this.getRouter().post("/salvar", async (req, res) => {
            console.log("body", req.body);
            const Usuario = util.bindObjetoClasse(req.body, Usuario);


            const retorno = await usuarioService.salvar(Usuario);

            console.log(retorno);

            res.json(retorno);
        })

        this.getRouter().get("/listar", async (req, res) => {
            const retorno = await usuarioService.listar();

            res.json(retorno);
        })

        return this.getRouter();
    }
}
