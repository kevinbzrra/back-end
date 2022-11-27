const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const Database = require("./src/database/Database");
const AcessoWS = require("./src/WebService/AcessoWS");
const UsuarioWS = require("./src/WebService/UsuarioWS");

const database = new Database();
const acessoWS = new AcessoWS();
const usuarioWS = new UsuarioWS();
const app = express();

database.getClient().connect();

/* Middlewares */
app.use(
    cors({
        methods: "POST, PUT, DELETE, GET",
        origin: "*",
    })
);

app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json({ limit: "50mb", extended: true }));

app.use((req, res, next) => {
    console.log(req.path);
    next();
});


/* Rotas */
app.use("/api/acesso", acessoWS.montar());
app.use("/api/Usuario", usuarioWS.montar());

app.listen(
    8080,
    () => console.log("Servidor OK!")
);