function somaProdutorioInterno(arr) {
    let total = 0;

    for(let i = 0; i < arr.length; i++)  {
        let produto = 1;

        for(let j = 0; j < arr[i].length; j++)  {
            produto *= arr[i][j];
        }
        
        if(produto !== 1) total += produto;
    }

    return total;
}

/* Outra solução */
function somaProdutorioInterno(arr){
    let soma = 0;

    for(let i = 0; i < arr.length; i++) {
        let prod = 1;

        if (arr[i].length == 0) continue;

        for(let j = 0; j < arr[i].length; j++)  {
            prod *= arr[i][j]
        }

        soma += prod;
    }
    
    return soma;
}