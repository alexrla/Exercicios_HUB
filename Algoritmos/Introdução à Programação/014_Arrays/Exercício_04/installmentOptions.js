function parcelamento(valor) {
    return [(valor / 3).toFixed(2), (valor / 6).toFixed(2), (valor / 10).toFixed(2)];
}

/* Outra solução */
function parcelamento(valor) {
    const options = [];

    options.push((valor / 3).toFixed(2));
    options.push((valor / 6).toFixed(2));
    options.push((valor / 10).toFixed(2));

    return options;
}