function dobraValores(lista) {
    const novaLista = [];

    for(let i = 0; i < lista.length; i++) {
        novaLista.push(lista[i] * 2);
    }

    return novaLista;
}