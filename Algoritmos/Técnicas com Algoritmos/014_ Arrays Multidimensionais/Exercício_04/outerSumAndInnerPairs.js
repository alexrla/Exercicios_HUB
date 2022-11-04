function somatorio(arr) {
    let total = 0;

    for(let i = 0; i < arr.length; i++)  {
        if(arr[i].length) {

            for(let j = 0; j < arr[i].length; j++)  {
                if(arr[i][j] % 2 === 0) total += Number(arr[i][j]);
            }

        } else {

            total += Number(arr[i]);

        }
    }

    return total;
}

/* Outra solução */
function somatorio(arr){
    let soma = 0;

    for(let i = 0; i < arr.length; i++) {
        if(typeof arr[i] == 'object')   {
            for(let j = 0; j < arr[i].length; j++)  {
                if(arr[i][j] % 2 == 0)  {
                    soma += Number(arr[i][j])
                }
            }
        } else if(typeof arr[i])    {
            soma+= Number(arr[i])
        }
    }
    
    return soma;
}