function ondeEstou(caixas) {
    let newStr = "";

    for(let i = 0; i < caixas.length; i++) {
        // Pegando cada ocorrência da string e transformando em uma só
        newStr += caixas[i];

        // Contador utilizado para verificar se aquela substring, aparece uma única vez
        let count = 0

        //  Contador utilizado para verificar se aquela substring corrente, aparece mais de uma vez
        // no array de substrings
        let count2 = 0;

        // Array utilizado para guardar as substrings;
        let sub = [];

        for(let j = 0, z = newStr.length; j < caixas.length; j++, z++)  {
            /* 
                    Se a substring atual já está no array de substrings, quer dizer que ela
                é uma ocorrência da string que se repete, logo, o loop é parado e o
                contador utilizado para verificar se a substring corrente, aparece mais 
                de uma vez, é incrementado 
            */
            if(sub.includes(caixas.substring(j, z))) {
                count2++;
                break;
            }

            // Adicionando a substring ao array de substring
            sub.push(caixas.substring(j, z));

            /* 
                    Se a substring corrente é igual substring travada atualmente, o contador utilizado para 
                verificar se aquela substring, aparece uma única vez, é incrementado
            */
            if(caixas.substring(j, z) === newStr) {
                count++;
            }
        }

        //  Se o contador utilizado para verificar se aquela substring corrente, aparece mais de uma vez
        // no array de substrings, for igual a 1, partimos para a próxima iteração do loop externo
        if(count2 === 1) continue;

        //  Se o contador utilizado para verificar se aquela substring, aparece uma única vez, for igual 
        // a 1, significa que aquela substring de tamanho n, é unica, logo, retornamos o seu tamanho
        if(count === 1) return newStr;
    
    }
}

/* Outra solução */
function ondeEstou(caixas) {
    // tentar todos os valores de k
    for (let k = 1; k <= caixas.length; k++) {
        let kValido = true; // se este valor de k é válido

        // testar se todas as substrings de tamanho k aparecem uma única vez
        for (let start = 0; start < caixas.length - k; start++) {
            const substring = caixas.substring(start, start + k);
            if (caixas.indexOf(substring, start + 1) !== -1) {
                kValido = false;
                break;
            }
        }

        if (kValido) {
            return k;
        }
    }
}