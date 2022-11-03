function imprimeSequencias(num) {
    let total = "";
    
    for(let i = 1; i <= num; i++)  {
        total += String(i);
        console.log(total)
    }
}

/* Solução com loop aninhado */
function imprimeSequencias(num){
    for(let i = 1; i <= num; i++)   {

        let str = ""

        for(let j = 1; j <= i; j++)   {
            str += j;
        }

        console.log(str)
    }
}