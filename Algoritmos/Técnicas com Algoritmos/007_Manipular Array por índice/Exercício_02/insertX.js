function insere(x, lst) {
    let index;

    for(let i = 0; i < lst.length; i++) {
        if(x < lst[i]) {
            index = i;
            break;
        }
    }

    if(!index) index = lst.length;

    lst.splice(index, 0, x);

    return lst;
}