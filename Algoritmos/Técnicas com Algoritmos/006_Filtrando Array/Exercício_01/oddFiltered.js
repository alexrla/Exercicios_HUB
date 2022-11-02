function filtraImpares(lista) {
    const novaLista = [];

    for(let i = 0; i < lista.length; i++)   {
        if(lista[i] % 2 === 1) novaLista.push(lista[i]);
    }

    return novaLista;
}