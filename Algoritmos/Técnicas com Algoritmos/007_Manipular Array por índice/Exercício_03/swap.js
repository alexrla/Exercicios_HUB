function swapMenorNumero(lst) {
    if(lst.length === 0) return lst;

    let item = lst[0], index;

    for(let i = 0; i < lst.length; i++) {
        console.log(item);
        if(lst[i] < item) {
            item = lst[i];
            index = i;
        }
    }

    lst[index] = lst[0];
    lst[0] = item; 

    return lst;
}