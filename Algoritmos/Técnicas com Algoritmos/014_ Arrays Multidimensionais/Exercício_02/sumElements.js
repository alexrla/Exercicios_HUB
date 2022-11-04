function somaElementos(arr) {
    let total = 0;

    for(let i = 0; i < arr.length; i++)  {
        for(let j = 0; j < arr[i].length; j++)  {
            total += arr[i][j];
        }
        
    }

    return total;
}

console.log(somaElementos([[1, 2], [3, 2, 4], [1, 2], [3]]))