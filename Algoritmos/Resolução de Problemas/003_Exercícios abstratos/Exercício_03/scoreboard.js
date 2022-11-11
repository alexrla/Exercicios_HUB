function subindoNoQuadroDeLideres(placarLideres, placarJogador){
    const result = [];

    const unique = [...new Set(placarLideres)];

    for(let i = 0; i < placarJogador.length; i++)   {
        for(let j = 0; j < unique.length; j++)   {
            if(placarJogador[i] < unique[unique.length - 1]) {

                result.push(unique.length + 1);

                break;

            }
            if(placarJogador[i] >= unique[j]) {

                result.push(j + 1);

                break;

            }
        }
    }

    return result;
}

function aceitoDesafio() {
    return false;
}

/* Outras soluções */
// - 1
function subindoNoQuadroDeLideres(placarLideres, placarJogador){
    const result = [];

    for(let i = 0; i < placarJogador.length; i++)   {
        let count = 1;

        for(let j = 0; j < placarLideres.length; j++)   {
            if(placarLideres[j] === placarLideres[j + 1]) continue;
            if(placarJogador[i] >= placarLideres[j]) {

                result.push(count);

                break;

            }
            if(j + 1 === placarLideres.length && placarJogador[i] !== placarLideres[j]) result.push(count + 1);

            count++;
        }
    }

    return result;
}

// - 2
function subindoNoQuadroDeLideres(placarLideres, placarJogador) {
    const n = placarLideres.length;
    const m = placarJogador.length;
    const ranque = new Array(n);
    const result = new Array(m);
    ranque[0] = 1;

    // Monta array com ranques dos placares
    for (let i = 1; i < placarLideres.length; i++) {
        if (placarLideres[i] == placarLideres[i - 1])
            ranque[i] = ranque[i - 1];
        else
            ranque[i] = ranque[i - 1] + 1;
    }

    for (let i = 0; i < placarJogador.length; i++) {
        const placar = placarJogador[i]
        //Verifica se o placar está dentro do intervalo dos placares dos lideres
        if (placar > placarLideres[0]) {
            result[i] = 1;
        } else if (placar < placarLideres[n - 1]) {
            result[i] = ranque[n - 1] + 1;
            //Procura a posição relativa aos ranques do quadro de lideres
        } else {
            let j = 0;
            while (placar < placarLideres[j]) j++;
            result[i] = ranque[j];
        }
    }
    
    return result
}