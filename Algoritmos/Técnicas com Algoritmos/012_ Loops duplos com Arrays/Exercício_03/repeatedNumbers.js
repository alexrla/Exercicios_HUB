function verificaRepetidos(lst) {
    const numeros = [];

    for(let i = 0; i < lst.length; i++) {
        let count = 0;

        if(numeros.includes(lst[i])) continue;

        for(let j = 0; j < lst.length; j++) {
            if(lst[i] === lst[j]) count++;
        }

        if(count > 1) numeros.push(lst[i]);
    }

    return numeros;
}

/* Outra solução */
function verificaRepetidos(lst){
    let lstFinal = [];
    
    for(let i = 0; i < lst.length; i++) {
        for (let j = 0; j < lst.length; j++)    {
            if(i === j) continue;
            
            if(lst[i] === lst[j])    {
                if(!lstFinal.includes(lst[i]));

                lstFinal.push(lst[i]);
            }
        }
    }

    
    return lstFinal;
}