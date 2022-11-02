function middleOne(lst) {
    if(lst.length % 2 === 1)  return lst[((lst.length + 1) / 2) - 1];
    else {
        const num1 = lst[(lst.length / 2) - 1];
        const num2 = lst[(lst.length / 2)];

        return (num1 + num2) / 2;
    }
}

/* Outras solução */
function middleOne(lst){
    const middleIndex = lst.length / 2;

    if (middleIndex % 2 == 0){

        const middleSmall = lst[middleIndex - 1];

        const middleBig = lst[middleIndex];

        const media = (middleSmall+middleBig) / 2;

        return media;

    } else {

        middleIndex = Math.floor(middleIndex);

        return lst[middleIndex];

    }
}