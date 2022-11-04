function produtoMatriz(mat) {
    let total = 0;

    for(let i = 0; i < mat.length; i++) {
        let produto = 1;

        for(let j = 0; j < mat[i].length; j++) {
            produto *= mat[i][j];
        }

        total += produto;
    }

    return total;
}