function ordenaPessoas(pessoas) {
    for(let i = 0; i < pessoas.length; i++) {
        let aux;

        for(let j = 0; j < pessoas.length; j++) {
            if(j + 1 >= pessoas.length) break;

            if(pessoas[j].idade >= pessoas[j + 1].idade) {
                if(pessoas[j].idade > pessoas[j + 1].idade)    {

                    aux = pessoas[j].idade;
                    pessoas[j].idade = pessoas[j + 1].idade;
                    pessoas[j + 1].idade = aux;

                    aux = pessoas[j].nome;
                    pessoas[j].nome = pessoas[j + 1].nome;
                    pessoas[j + 1].nome = aux;

                } else {

                    if(pessoas[j].nome > pessoas[j + 1].nome) {
                        aux = pessoas[j].idade;
                        pessoas[j].idade = pessoas[j + 1].idade;
                        pessoas[j + 1].idade = aux;

                        aux = pessoas[j].nome;
                        pessoas[j].nome = pessoas[j + 1].nome;
                        pessoas[j + 1].nome = aux;
                    }
                }
            }
        }
    }
}

/* Outra resposta */
function ordenaPessoas(pessoas) {
    for(let i = 0; i < pessoas.length; i++) {
        let aux;

        for(let j = 0; j < pessoas.length; j++) {
            if(j + 1 >= pessoas.length) break;

            if(pessoas[j].idade >= pessoas[j + 1].idade) {
                if(pessoas[j].idade > pessoas[j + 1].idade)    {

                    aux = pessoas[j];
                    pessoas[j] = pessoas[j + 1];
                    pessoas[j + 1] = aux;

                } else {

                    if(pessoas[j].nome > pessoas[j + 1].nome) {
                        aux = pessoas[j];
                        pessoas[j] = pessoas[j + 1];
                        pessoas[j + 1] = aux;
                    }

                }
            }
        }
    }
}