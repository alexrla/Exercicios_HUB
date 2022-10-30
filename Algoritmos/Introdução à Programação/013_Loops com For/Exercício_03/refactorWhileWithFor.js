function printInterval(x, y){  
    for(; x <= y; x++)  {
        console.log(x);
    }
}

/* Outra solução */
function printInterval(x, y){  
    for(let i = x; i <= y; i++)  {
        console.log(i);
    }
}