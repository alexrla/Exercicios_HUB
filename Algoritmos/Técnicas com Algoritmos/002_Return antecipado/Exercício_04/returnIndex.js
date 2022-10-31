function valorDobraIndice(lst) {
    for(let i = 0; i < lst.length; i++) {
        if(i * 2 === lst[i]) return i;
    }

    return false;
}