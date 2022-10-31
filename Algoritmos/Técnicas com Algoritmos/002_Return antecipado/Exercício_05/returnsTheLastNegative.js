function ultimoNegativo(lst) {
    let aux = 0, index = -1;

    for(let i = 0; i < lst.length; i++) {
        if(lst[i] < 0 && i > index) {
            index = i;
            aux = lst[i];
        }
    }

    if(aux < 0) return lst[index];
    else return false;
}

/* Outra solução */
function ultimoNegativo(lst) {
    for(let i = lst.length; i >= 0; i--) {
        if(lst[i] < 0 ) return lst[i]
    }

    return false;
}