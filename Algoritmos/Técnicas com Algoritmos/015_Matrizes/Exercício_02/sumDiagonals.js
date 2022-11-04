function somaDiagonais(mat) {
    for(let i = 0; i < mat.length; i++) {
        if(mat.length !== mat[i].length) return 0;
    }

    let total = 0;

    if(mat.length % 2 === 0)    {

        for(let i = 0; i < mat.length; i++) {
            for(let j = 0; j < mat.length; j++) {
                if(i === j) {
                    total += mat[i][j];
                }
                if(i + j ===  mat.length - 1) {
                    total += mat[i][j];
                }
            }
        }

    } else {
        for(let i = 0; i < mat.length; i++) {
            for(let j = 0; j < mat.length; j++) {
                if((i === j) && (i + j ===  mat.length - 1)){
                    total += mat[i][j];
                }
                else {

                    if(i === j) {
                        total += mat[i][j];
                    }
                    if(i + j ===  mat.length - 1) {
                        total += mat[i][j];
                    }

                }
            }
        }
    }

    return total;
}

/* Outras soluções */
// - 1
function somaDiagonais(mat) {
    for(let i = 0; i < mat.length; i++) {
        if(mat.length !== mat[i].length) return 0;
    }

    let total = 0;


    for(let i = 0; i < mat.length; i++) {
        for(let j = 0; j < mat.length; j++) {
            if((i === j) && (i + j ===  mat.length - 1)){
                total += mat[i][j];
            }
            else {

                if(i === j) {
                    total += mat[i][j];
                }
                if(i + j ===  mat.length - 1) {
                    total += mat[i][j];
                }

            }
        }
    }

    return total;
}

// - 2
function somaDiagonais(mat){
    let sum = 0;

    for(let i = 0; i < mat.length; i++) {
        if(mat[i].length != mat.length) return 0;
    }

    for(let i = 0; i < mat.length; i++) {
        let aux = [...mat[i]];

        aux = aux.reverse();

        for (let j = 0; j < mat[i].length; j++) {
            if(i == j){
                sum += mat[i][j] + aux[i];
            }
        }
    }

    if(mat.length % 2 != 0) {
        let middle = Math.floor(mat.length/2);

        sum -= mat[middle][middle];
    }

    return sum;
}