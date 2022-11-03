function imprimePadrao(numLinhas) {
    let str = [];

    for(let i = 1; i <= numLinhas; i++) {
        str.push(i);
        console.log(str.join(" "));
    }

    for(let i = numLinhas - 1; i > 0; i--) {
        str.pop();
        console.log(str.join(" "));
    }
}

/* Solução com loop aninhado */
function imprimePadrao(numLinhas){
    for(let i = 1; i <= numLinhas; i++) {
        let lst = [];

        for(let j=1; j <= i; j++){
            lst.push(j);
        }

        console.log(lst.join(" "));
    }

    for (let i = numLinhas - 1; i >= 1; i--)    {
        let lst = [];

        for(let j = 1; j <= i; j++){
            lst.push(j)
        }
        
        console.log(lst.join(" "))
    }
}