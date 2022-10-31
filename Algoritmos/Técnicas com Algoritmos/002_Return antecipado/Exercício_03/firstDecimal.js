function primeiroDecimal(lst) {
    for(let i = 0; i < lst.length; i++) {
        if(parseInt(lst[i]) !== parseFloat(lst[i])) return lst[i];
    }

    return -1;
}

/* Outra solução */
function primeiroDecimal(lst){
    for (let i = 0; i < lst.length ; i++)   {
        if (lst[i] % 1 != 0) return lst[i];
    }

    return -1;
}