module.exports = class ClausulaWhere {
    #condicao;

    getCondicao() {
        return this.#condicao;
    }

    #setCondicao(pCondicao) {
        this.#condicao = pCondicao;
    }

    adicionarCondicao(pCondicao) {
        if (pCondicao.getTipo() === "TEXTO") {
            pCondicao.setValor("'" + pCondicao.getValor() + "'");
        }

        if (pCondicao.getTipo() === "NUMERO") {
            pCondicao.setValor(Number(pCondicao.getValor()));
        }

        if (pCondicao.getSinal() === "IGUAL") {
            pCondicao.setSinal("=");
        }

        if (pCondicao.getSinal() === "DIFERENTE") {
            pCondicao.setSinal("<>");
        }

        let condicao = this.getCondicao();

        if (!condicao) {
            condicao = "";
        }

        this.#setCondicao(
            condicao
            + " "
            + pCondicao.getOperacao()
            + " "
            + pCondicao.getCampo()
            + " "
            + pCondicao.getSinal()
            + " "
            + pCondicao.getValor()
        );
    }
}