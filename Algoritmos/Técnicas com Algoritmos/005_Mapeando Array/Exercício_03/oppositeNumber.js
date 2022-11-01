function numeroOposto(lst) {
    const novaLST = [];

    for(let i = 0; i < lst.length; i++) {
        novaLST.push(-1 * lst[i]);
    }

    return novaLST;
}