function listaCompras(lista, precos, total) {
    const items = [];

    for(let i = 0; i < lista.length; i++)   {
        if(precos[i] <= total)  {
            items.push(lista[i]);
            total -= precos[i];
        }
    }

    return items;
}