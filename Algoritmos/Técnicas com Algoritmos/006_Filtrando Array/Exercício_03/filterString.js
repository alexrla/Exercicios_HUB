function filtraTamTres(lst) {
    const novaLST = [];

    for(let i = 0; i < lst.length; i++)   {
        if(lst[i].length <= 3) novaLST.push(lst[i]);
    }

    return novaLST;
}