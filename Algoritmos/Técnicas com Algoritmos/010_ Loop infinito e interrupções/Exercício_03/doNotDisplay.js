function descarta(x, y, lst) {
    const novaLST = [];

    for(let i = 0; i < lst.length; i++) {
        if(i === x || i === y) continue;
        novaLST.push(lst[i]);
    }

    return novaLST;
}