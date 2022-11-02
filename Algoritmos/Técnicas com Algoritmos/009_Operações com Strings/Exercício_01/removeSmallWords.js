function removedorDePalavras(str) {
    const strAUX = str.split(" ");
    let novaSTR = [];

    for(let i = 0; i < strAUX.length; i++) {
        if(strAUX[i].length > 3) novaSTR.push(strAUX[i]);
    }

    return novaSTR.join(" ");
}