function figurinhasFaltantes(n, lst) {
    const result = [];

    for(let i = 0; i < n; i++)  {
        if(!lst.includes(i + 1)) result.push(i + 1);
    }

    return result;
}

/* Outra solução */
function figurinhasFaltantes(n, lst){
    let auxArr = [...Array(n).keys()].map(el => el + 1);

    for(let i = 0; i < lst.length; i++) {
        if(auxArr.includes(lst[i])){
            let idx = auxArr.findIndex(el => el == lst[i]);

            auxArr.splice(idx, 1);
        }
    }
    
    return auxArr
}  