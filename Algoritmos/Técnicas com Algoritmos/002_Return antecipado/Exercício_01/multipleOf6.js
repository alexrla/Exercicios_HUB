function multiploDeSeis(lst) {
    for(let i = 0; i < lst.length; i++) {
        if(lst[i] % 2 === 0 && lst[i] % 3 === 0) return lst[i];
    }

    return -1;
}