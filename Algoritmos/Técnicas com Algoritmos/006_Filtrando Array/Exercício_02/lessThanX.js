function menorQue(x, lst) {
    const novaLST = [];

    for(let i = 0; i < lst.length; i++)   {
        if(lst[i] < x) novaLST.push(lst[i]);
    }

    return novaLST;
}