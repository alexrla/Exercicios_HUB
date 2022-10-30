function contem(char, str) {
    if(str.split("").includes(char)) return true;
    else return false;
}

/* Outra solução */
function contem(char, str) {
    for(let i = 0; i < str.length; i++) {
        if(str[i] === char) return true;
    }

    return false;
}