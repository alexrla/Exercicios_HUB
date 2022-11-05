function verificaRepetidos(lst) {
    for(let i = 0; i < lst.length; i++) {
        let count = 0;

        for(let j = 0; j < lst.length; j++) {
            if(lst[i] === lst[j]) count++;
        }

        if(count > 1) return true;
    }

    return false;
}