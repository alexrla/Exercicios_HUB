function insereVirgula(str) {
    const strAUX = str.split(" ");
    let novaSTR = "";

    for(let i = 0; i < strAUX.length; i++) {
        if(i + 1 === strAUX.length) novaSTR += strAUX[i];
        else novaSTR += `${strAUX[i]}, `;
    }

    return novaSTR;
}

/* Outra solução */
function insereVirgula(str){
    if(str.length == 0) return "";

    let strAUX = str.split(" ");
    let novaSTR = "";

    for(let i = 0; i < strAUX.length - 1; i++)  {
        novaSTR += strAUX[i] + ", ";
    }

    novaSTR += strAUX[strAUX.length - 1]

    return novaSTR;
}