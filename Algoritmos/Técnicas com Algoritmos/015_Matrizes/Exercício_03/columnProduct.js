function produtorioColuna(x, mat) {
    if(x > mat[0].length - 1) return null;

    let produto = 1;

    for(let i = 0; i < mat.length; i++) {
        for(let j = 0; j < mat.length; j++) {
            if(j === x) {
                produto *= mat[i][j];
                break;
            }
        }
    }

    return produto;
}