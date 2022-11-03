function procuraDobrado(lst) {
    for(let i = 0; i < lst.length; i++) {
        if(lst[i] === 0) continue;

        for(let j = 0; j < lst.length; j++) {
            if(lst[j] === 0) continue;
            if(lst[i] === 2 * lst[j]) return true;
        }
    }

    return false;
}

/* Outra solução */
function procuraDobrado(lst){
    for(let i = 0; i < lst.length; i++) {
        for(let j = 0; j < lst.length; j++) {
            if(lst[i] === lst[j]) continue;

            if(lst[i] === 2*lst[j])  return true;
        }
    }

    return false;
}