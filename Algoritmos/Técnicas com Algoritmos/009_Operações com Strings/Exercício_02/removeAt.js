function removeAt(x, str) {
    if(x > str.length) return str;
    else {
        const novaSTR = str.split("");

        novaSTR.splice(x, 1);

        return novaSTR.join("");
    }
}

/* Outras soluções */
// - 1
function removeAt(x, str){
    let novaStr = ""; 

    for (let i = 0; i < str.length; i++)    {
        if(x == i){
            continue;
        }
        
        novaStr += str[i];
    }

    return novaStr
}

// - 2
function removeAt(x, str){
    return str.slice(0, x) + str.slice(x + 1)  
}