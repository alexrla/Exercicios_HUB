function adicionaCedilha(str, x) {
    const novaSTR = str.split("");

    novaSTR.splice(x, 0, "ç");

    return novaSTR.join("");
}

/* Outra solução */
function adicionaCedilha(str, x){
    let strFinal = "";

    if(x >= str.length){

        return str + "ç";

    } else {

        let i;

        for(i = 0; i < x; i++){

            strFinal += str[i]; 
            
        }

        strFinal += "ç";

        for(i; i < str.length; i++){

            strFinal += str[i];

        }
    }

    return strFinal;
}