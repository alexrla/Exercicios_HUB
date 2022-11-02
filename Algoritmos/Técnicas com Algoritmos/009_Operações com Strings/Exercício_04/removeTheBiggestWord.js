function removeMaior(str) {
    const strAUX = str.split(", ");
    let indexes = [], biggestWord = "";

    for(let i = 0; i < strAUX.length; i++) {
        if(strAUX[i].length > biggestWord.length) {

            indexes = [];

            indexes.push(i);

            biggestWord = strAUX[i];

        } else if(strAUX[i].length >= biggestWord.length)  {
        
            indexes.push(i);

        }
    }    

    for(let i = 0; i < indexes.length; i++) {
        strAUX.splice(indexes[i] - i, 1);
    }

    return strAUX.join(", ")
}