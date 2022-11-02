function filtraPalavrasComA(lst) {
    const novaLST = [];

    for(let i = 0; i < lst.length; i++)   {
        if(lst[i][0] === "a" || lst[i][0] === "A") novaLST.push(lst[i]);
    }

    return novaLST;
}