function maiorNumero(lista) {
    let maior = lista[0];

    if(lista.length === 0) return null;

    for(let i = 0; i < lista.length; i++) {
        if(lista[i] > maior) maior = lista[i];
    }

    return maior;
}