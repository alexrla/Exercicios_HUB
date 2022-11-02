function removeImpares(lst) {
    const novaLST = [];

    for(let i = 0; i < lst.length; i++) {
        if(i % 2 === 0) novaLST.push(lst[i]);
    }

    return novaLST;
}