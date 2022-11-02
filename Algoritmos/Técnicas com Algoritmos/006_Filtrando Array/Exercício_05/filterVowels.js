function filtraVogais(lst) {
    const novaLST = [];

    const vowels = ["a", "e", "i", "o", "u"]

    for(let i = 0; i < lst.length; i++)   {
        if(vowels.includes(lst[i].toLowerCase())) novaLST.push(lst[i]);
    }

    return novaLST;
}

/* Outra solução */
function filtraVogais(lst){
    const novaLST = [];

    for(let i = 0; i < lst.length; i++){

        if(
            lst[i] === "a" || 
            lst[i] === "e" || 
            lst[i] === "i" || 
            lst[i] === "o" || 
            lst[i] === "u"
        )   {

            novaLST.push(lst[i]);

        }
    }
    return novaLST;
}