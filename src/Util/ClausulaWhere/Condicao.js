module.exports = class Condicao {
    #campo;
    #valor;
    #operacao;
    #sinal;
    #tipo;

    getCampo() {
        return this.#campo;
    }

    setCampo(pCampo) {
        this.#campo = pCampo;
    }

    getValor() {
        return this.#valor;
    }

    setValor(pValor) {
        this.#valor = pValor;
    }

    getOperacao() {
        return this.#operacao;
    }

    setOperacao(pOperacao) {
        this.#operacao = pOperacao;
    }

    getSinal() {
        return this.#sinal;
    }

    setSinal(pSinal) {
        this.#sinal = pSinal;
    }

    getTipo() {
        return this.#tipo;
    }

    setTipo(pTipo) {
        this.#tipo = pTipo;
    }
}
