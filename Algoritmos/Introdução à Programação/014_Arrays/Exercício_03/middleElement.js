function returnMiddleOne(array) {
    if(array.length % 2 === 1)  {
        return array[((array.length + 1) / 2) - 1];
    } else {
        return array[(array.length / 2) - 1]
    }
}

/* Outra solução */
function returnMiddleOne(array){
    return array[Math.floor((array.length-1)/2)];
}