function retornaEmReais(num) {
    num = num.toFixed(2).toString();

    return `R$${num}`;
}