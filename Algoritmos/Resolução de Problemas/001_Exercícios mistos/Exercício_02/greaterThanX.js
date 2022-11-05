function maiorQue(x, lst) {
    const newLST = [];

    for(let i = 0; i < lst.length; i++) {
        if(lst[i] >= x) newLST.push(lst[i]);
    }

    return newLST;
}