function subsProprios(lst) {
    const novaLST = [];

    for(let i = 0; i < lst.length; i++) {
        novaLST.push(lst[i][0].toUpperCase() + lst[i].slice(1));
    }

    return novaLST;
}