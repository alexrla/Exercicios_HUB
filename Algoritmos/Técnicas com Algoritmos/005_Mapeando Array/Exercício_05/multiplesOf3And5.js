function foobooMultiplos(lst) {
    const novaLST = [];

    for(let i = 0; i < lst.length; i++) {
        if  (
            lst[i] % 3 === 0 && 
            (
                String(lst[i])[String(lst[i]).length - 1] == 0 ||
                String(lst[i])[String(lst[i]).length - 1] == 5 
            )
        ) {

            novaLST.push("fooboo");

        } else if(lst[i] % 3 === 0) {

            novaLST.push("foo");

        } else if (
            String(lst[i])[String(lst[i]).length - 1] == 0 ||
            String(lst[i])[String(lst[i]).length - 1] == 5
        ) {

            novaLST.push("boo");

        } else {

            novaLST.push(lst[i]);

        }
    }

    return novaLST;
}

/* Outra solução */
function foobooMultiplos(lst) {
    const novaLST = [];

    for(let i = 0; i < lst.length; i++) {
        if  (lst[i] % 3 === 0 && lst[i] % 5 === 0) {

            novaLST.push("fooboo");

        } else if(lst[i] % 3 === 0) {

            novaLST.push("foo");

        } else if (lst[i] % 5 === 0) {

            novaLST.push("boo");

        } else {

            novaLST.push(lst[i]);

        }
    }

    return novaLST;
}