function tresMenores(lst) {
    const newLST = [];

    for(let i = 0; i < 3; i++) {
        let aux = lst[0];

        for(let j = 0; j < lst.length; j++) {
            if(lst[j] < aux) aux = lst[j];
        }

        newLST.push(aux);

        lst.splice(lst.indexOf(aux), 1);
    }

    return newLST
}

/* Outra solução */
function tresMenores(lst){
    let lstFinal = [];

    for(let k = 0; k < 3; k++)  {
        let min = Infinity;

        let idx = -1;

        for(let i = 0; i < lst.length; i++) {
            if(lst[i] < min)    {
                min = lst[i];

                idx = i;
            }
        }

        lstFinal.push(min);
        
        lst.splice(idx, 1);
    }
    return lstFinal;

}