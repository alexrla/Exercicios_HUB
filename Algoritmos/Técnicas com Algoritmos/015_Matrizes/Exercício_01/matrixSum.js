function somaMatriz(mat) {
    let total = 0;

    for(let i = 0; i < mat.length; i++) {
        for(let j = 0; j < mat[i].length; j++) {
            total += mat[i][j];
        }
    }

    return total;
}