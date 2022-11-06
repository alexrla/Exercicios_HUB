function maisFrequente(lst){
    let value = lst[0];
    let qtd = 1;

    lst.sort();

    for(let i = 0; i < lst.length; i++) {
        let count = 0;

        for(let j = 0; j < lst.length; j++) {
            if(lst[i] === lst[j]) count++;
        }

        if(count >= qtd) {
            value = lst[i];
            qtd = count;
        }
    }

    return value;
}

/* Outras solução */
function maisFrequente(lst) {
    let notaMaisComum = -Infinity;
    let frequenciaNotaMaisComum = -Infinity;

    for (let i = 0; i < lst.length; i++) {
        const notaBase = lst[i];
        let frequenciaNotaBase = 0;

        for (let j = 0; j < lst.length; j++) {
            const notaTeste = lst[j];

            if (notaTeste === notaBase) {
                frequenciaNotaBase++;
            }
        }

        if (
            frequenciaNotaBase > frequenciaNotaMaisComum ||
            (frequenciaNotaBase === frequenciaNotaMaisComum &&
            notaBase > notaMaisComum)
        ) {
            notaMaisComum = notaBase;
            frequenciaNotaMaisComum = frequenciaNotaBase;
        }
    }

    return notaMaisComum;
}