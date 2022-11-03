function acumulaPares(lst) {
    let total = 0;

    for(let i = 0; i < lst.length; i++) {
        let count = 0;

        for(let j = 0; j < lst.length; j++) {
            if(lst[i] === lst[j]) count++;
        }

        if(count === 2) total+= lst[i];
    }

    return total;
}

/* Outra solução */
function acumulaPares(lst){
    let aux = [];
    let sum = 0;

    for(let i = 0; i < lst.length; i++) {
        let cont = 0;
        
        for(let j = 0; j < lst.length; j++) {
            if(lst[i]==lst[j])  cont++;
        }

        aux.push(cont);
    }

    for(let i = 0; i < aux.length; i++) {
        if(aux[i] == 2) sum+= lst[i];
    }

    return sum;
}