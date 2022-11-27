const Usuario = require("../Model/Usuario/Usuario");

module.exports = class Util {
    bindObjetoClasse(pObjeto, pClasse) {
        let classe = new pClasse();

        Object.keys(pObjeto).forEach(pKey => {
            let key;

            if (pKey.includes("_")) {
                const listaSplitJoin = [];

                pKey.split("_").forEach(pSplit => {
                    pSplit = pSplit[0].toUpperCase() + pSplit.substring(1)

                    listaSplitJoin.push(pSplit);
                });

                key = listaSplitJoin.join("");
            } else {
                key = pKey[0].toUpperCase() + pKey.substring(1)
            }

            classe["set" + key]?.(pObjeto[pKey]);
        });

        return classe;
    }
}