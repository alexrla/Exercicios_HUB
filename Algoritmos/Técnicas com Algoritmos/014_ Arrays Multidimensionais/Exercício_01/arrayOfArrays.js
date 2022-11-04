function transformaObjArr(objArr) {
    const myArray = [];

    for(let i = 0; i < objArr.length; i++)  {
        const arrayAUX = [];

        arrayAUX.push(objArr[i].nome);
        arrayAUX.push(objArr[i].telefone);
        arrayAUX.push(objArr[i].endereco);

        myArray.push(arrayAUX);
    }

    return myArray;
}

/* Outra solução */
function transformaObjArr(objArr){
    let lstFinal = [];

    for(let i = 0; i < objArr.length; i++)  {
        const objeto = objArr[i];

        const propriedades = Object.keys(objeto);

        let auxArr = [];

        for(let j = 0; j < propriedades.length; j++)    {
            auxArr.push(objeto[propriedades[j]]);
        }

        lstFinal.push(auxArr);
    }

    return lstFinal;
}