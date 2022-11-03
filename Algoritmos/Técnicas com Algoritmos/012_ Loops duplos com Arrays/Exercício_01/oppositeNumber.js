function temOposto(lst) {
    for(let i = 0; i < lst.length; i++) {
        for(let j = 0; j < lst.length; j++) {
            if(lst[i] === -1 * lst[j]) return true;
        }
    }

    return false;
}