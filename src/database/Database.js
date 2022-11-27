const { Client } = require("pg");

const client = new Client({
    host: "SEU HOST",
    port: 'PORTA DO SEU BANCO NUMERO',
    database: "NOME DO BANCO",
    password: "SENHA DO PGADMIN",
    user: "postgres",
});

module.exports = class Database {
    #client = client;

    getClient() {
        return this.#client;
    }
}

