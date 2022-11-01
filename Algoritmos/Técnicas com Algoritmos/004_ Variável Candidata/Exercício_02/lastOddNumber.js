function ultimoImpar(lst) {
    for(let i = lst.length - 1; i >= 0; i--) {
        if(lst[i] % 2 !== 0)  return lst[i];
    }

    return null;
}