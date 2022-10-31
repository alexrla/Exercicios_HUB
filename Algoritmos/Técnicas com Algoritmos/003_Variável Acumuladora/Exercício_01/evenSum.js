function somaPares(lista) {
    let total = 0;

    for(let i = 0; i < lista.length; i++) {
        if(lista[i] % 2 === 0) total += lista[i];
    }

    return total;
}