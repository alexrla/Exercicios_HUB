function convertAndSum(lst) {
    let total = 0;

    for(let i = 0; i < lst.length; i++) {
        total += Number(lst[i])
    }

    return total;
}