function string3(lst) {
    for(let i = 0; i < lst.length; i++) {
        if(lst[i].length === 3) return lst[i];
    }

    return "";
}