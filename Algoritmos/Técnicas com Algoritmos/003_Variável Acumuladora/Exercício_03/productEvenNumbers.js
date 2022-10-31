function produtorioNumPares(lista) {
    let produto = 1, count = 0;

    for(let i = 0; i < lista.length; i++) {
        if(lista[i] % 2 === 0) {
            produto *= lista[i];
            count++;
        }
    }

    if(count > 0) return produto;
    else return -1;
}

/* Outra solução */
function produtorioNumPares(lst){
    let produto = 1;

    for(let i = 0; i < lst.length; i++){
        if(lst[i] % 2 == 0) {
            produto *= lst[i];
        }
    }

    if (produto % 2 != 0){
        return -1;
    }
    
    return produto;
}