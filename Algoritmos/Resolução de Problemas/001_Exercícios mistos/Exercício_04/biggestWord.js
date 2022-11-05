function maiorNoFim(str) {
    if(str.length === 0) return str;

    const strAUX = str.split(" ");

    let palavraBig = str[0];

    for(let i = 0; i < strAUX.length; i++)  {
        if(strAUX[i].length > palavraBig.length) palavraBig = strAUX[i];
    }

    strAUX[strAUX.indexOf(palavraBig)] = strAUX[strAUX.length - 1];
    
    strAUX[strAUX.length - 1] = palavraBig;

    return strAUX.join(" ");
}

/* Outra solução */
function maiorNoFim(str){
    let idx = -1;

    let tam = -Infinity;

    let lst = str.split(" ");

    for(let i = 0; i < lst.length; i++) {
        if(lst[i].length > tam) {
            tam = lst[i].length;
            idx = i;
        }    
    }

    let temp = lst[idx];
    lst[idx] = lst[lst.length - 1];
    lst[lst.length - 1] = temp;

    return lst.join(" ");
}