function acumulaVogais(lst) {
    let str = "";

    const vowels = ["a", "e", "i", "o", "u"];

    for(let i = 0; i < lst.length; i++) {
        if(vowels.includes(lst[i].toLowerCase())) str += lst[i];
    }

    return str;
}

/* Outras soluções */
// - 1
function acumulaVogais(lst){
    let str = "";

    let vogais = []

    for(let i = 0; i < lst.length; i++){
        let ehVogal = (
                        lst[i] == "a" || 
                        lst[i] == "e" || 
                        lst[i] == "i" || 
                        lst[i] == "o" || 
                        lst[i] == "u"
                        );
                        
        if(ehVogal) str += lst[i];
    }

    return str;
}

// - 2
function acumulaVogais(lst){
    let str = "";

    const vowels = ["a", "e", "i", "o", "u"];

    for(let i = 0; i < lst.length; i++){
        for(let j = 0; j < vowels.length; j++) {
            if(lst[i] === vowels[j])    {
                str += lst[i];
                break;
            }
        }
    }

    return str;
}