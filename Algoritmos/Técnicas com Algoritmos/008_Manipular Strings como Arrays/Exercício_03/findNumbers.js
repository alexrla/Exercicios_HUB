function indexNum(str) {
    const indexes = [];

    for(let i = 0; i < str.length; i++) {
        if(!isNaN(Number(str[i]))) indexes.push(i); 
    }

    return indexes;
} 

/* Outra solução */
function indexNum(str){
    let lstFinal = [];

    for(let i = 0; i < str.length; i++){
        if (/[0-9]/.test(str[i])) lstFinal.push(i)
    }
    
    return lstFinal;
}