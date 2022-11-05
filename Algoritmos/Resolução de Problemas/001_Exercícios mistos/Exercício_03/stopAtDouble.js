function paraNoDobro(lst) {
    let total = 0;

    for(let i = 0; i < lst.length; i++) {

        if(i * 2 === lst[i]) return total;

        total += lst[i];
    }

    return total;
}