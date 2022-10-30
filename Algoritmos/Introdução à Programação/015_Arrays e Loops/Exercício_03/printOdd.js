function imprimeImpares(array) {
    for(let i = 0; i < array.length; i++)   {
        if(array[i] % 2 !== 0) console.log(array[i]);
    }
}