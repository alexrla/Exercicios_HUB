function sucessores(lst) {
    const novaLST = [];

    for(let i = 0; i < lst.length; i++) {
        novaLST.push(lst[i] + 1);
    }

    return novaLST;
}