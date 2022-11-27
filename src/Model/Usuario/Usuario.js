module.exports = class Usuario {
    #seqUsuario;
    #nome;
    #senha;
    #email;
    #chave;
    #dataCadastro;

    getSeqUsuario() {
        return this.#seqUsuario;
    }

    setSeqUsuario(pSeqUsuario) {
        this.#seqUsuario = pSeqUsuario;
    }

    getNome() {
        return this.#nome;
    }

    setNome(pNome) {
        this.#nome = pNome;
    }

    getSenha() {
        return this.#senha;
    }

    setSenha(pSenha) {
        this.#senha = pSenha;
    }

    getEmail() {
        return this.#email;
    }

    setEmail(pEmail) {
        this.#email = pEmail;
    }

    getChave() {
        return this.#chave;
    }

    setChave(pChave) {
        this.#chave = pChave;
    }

    getDataCadastro() {
        return this.#dataCadastro;
    }
}