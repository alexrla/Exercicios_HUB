function deslocaLetras(str) {
    if(str.length === 0) return str;

    let newSTR = "";

    for(let i = 0; i < str.length; i++) {
        if(i + 1 >= str.length) break; 
        else newSTR += str[i + 1]
    }

    newSTR += str[0];

    return newSTR; 
} 

/* Outra solução */
function deslocaLetras(str){
    return str.length === 0 ? str : str.slice(1) + str[0];
}