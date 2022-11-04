function ordenaNumeros(numeros) {
    for(let i = 0; i < numeros.length; i++) {
        let aux;

        for(let j = 0; j < numeros.length; j++) {
            if(numeros[j] > numeros[j + 1]) {
                aux = numeros[j];
                numeros[j] = numeros[j + 1];
                numeros[j + 1] = aux;
            }
        }
    }

    return numeros;
}