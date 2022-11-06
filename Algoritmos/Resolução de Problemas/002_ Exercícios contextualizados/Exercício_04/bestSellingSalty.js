function contaSalgado (arr) { 
    let qtdC = 0;
    let qtdR = 0;
    let qtdP = 0;

    for(let i = 1; i < arr.length; i++) {
        if(arr[i] === "T")   break;
        else {
            if(arr[i].includes("C")) {
                qtdC += Number(arr[i].substring(0, 2))
            }
            else if(arr[i].includes("R")) {
                qtdR += Number(arr[i].substring(0, 2))
            }
            else if(arr[i].includes("P")) {
                qtdP += Number(arr[i].substring(0, 2))
            }
        }
    }

    return [ qtdC, qtdR, qtdP];
}

/* Outra solução */
function contaSalgado (arr) {
    let coxinhas = 0;
    let risolis = 0;
    let pasteis = 0;

    for (let i = 0 ; ; i ++) {
        let salgado = arr[i];
        if (salgado.indexOf('C') > 0) {
            coxinhas += Number(salgado.split(' ')[0]);
        }
        if (salgado.indexOf('R') > 0) {
            risolis += Number(salgado.split(' ')[0]);
        }
        if (salgado.indexOf('P') > 0) {
            pasteis += Number(salgado.split(' ')[0]);
        }

        if (arr[i] === 'T') break;
    }

    return [coxinhas, risolis, pasteis];
}