function menorDecimal(lst) {
    let aux;

    for(let i = 0; i < lst.length; i++) {
        if(parseInt(lst[i]) != parseFloat(lst[i]))  {
            
            if(!aux) aux = lst[i];
            else {

                if(lst[i] < aux) aux = lst[i];

            }
        }
    }

    if(aux) return aux;
    else return null;
}

/* Outra solução */
function menorDecimal(lst){
    let menorNumDec = Number.POSITIVE_INFINITY;

    for(let i = 0; i < lst.length; i++){
        if(lst[i] % 1 != 0 && lst[i] < menorNumDec){
            menorNumDec = lst[i]
        }
    }

    if (menorNumDec == Number.POSITIVE_INFINITY){
        return null;
    }
    
    return menorNumDec;
}