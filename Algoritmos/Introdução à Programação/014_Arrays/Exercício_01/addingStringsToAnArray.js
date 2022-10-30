function transformaEmArray(str1, str2, str3) {
    return [str1, str2, str3];
}

/* Outras soluções */

// - 1
function transformaEmArray(str1, str2, str3) {
    const stringArray = [];
    
    stringArray.push(str1);
    stringArray.push(str2);
    stringArray.push(str3);

    return stringArray;
}

// - 2
/*
    function transformaEmArray2(str1, str2, str3){
        let stringArray = [];

        for (let i = 0; i < arguments.length; i++){
            stringArray.push(arguments[i]);
        }

        return stringArray;
    }
*/