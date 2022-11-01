function posLastEmpty(lst) {
    for(let i = lst.length - 1; i >= 0; i--) {
        if(lst[i] === "")  return i;
    }

    return -1;
}