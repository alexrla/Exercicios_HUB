function paraNoDobro(lst) {
    let total = 0;

    for(let i = 0; i < lst.length; i++) {
        if(lst[i] === i * 2) {
            total += lst[i];
            break;
        }

        total += lst[i];
    }

    return total;
}