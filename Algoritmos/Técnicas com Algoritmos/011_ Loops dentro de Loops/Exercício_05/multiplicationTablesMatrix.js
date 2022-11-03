function tabelaTabuada() {
    for(let i = 1; i <= 10; i++)    {
        const arrayOfNumbers = [];
        
        for(let j = 1; j <= 10; j++) {
            arrayOfNumbers.push(i * j);
        }

        console.log(arrayOfNumbers.join(" "));
    }
}

tabelaTabuada();