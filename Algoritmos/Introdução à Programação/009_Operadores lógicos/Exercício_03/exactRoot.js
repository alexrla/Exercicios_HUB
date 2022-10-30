function testeRaizExata(numero) {
    const raiz = Math.sqrt(numero);

    if(raiz * raiz === numero) return true;
    else return false;
}