function verificaSimetria(mat) {
    for(let i = 0; i < mat.length; i++) {
        for(let j = 0; j < mat.length; j++) {
            if(mat[i][j] !== mat[j][i]) return false;
        }
    }

    return true;
}

/* Outra solução */
function transposta(mat)    {		
    let tr = new Array(mat.length);

    for(let i = 0; i < mat.length; i++) {
        tr[i] = new Array(mat[i].length);
    }

    for(let i = 0; i < mat.length; i++) {
        for(let j = 0; j < mat[i].length; j++) {
            tr[i][j] = mat[j][i];
        }
    }

    return tr;
}

function verificaSimetria(mat)  {
    let tr = transposta(mat);

    for(let i = 0; i < mat.length; i++) {
        for(let j = 0; j < mat[i].length; j++) {
            if (mat[i][j] != tr[i][j])  return false;
        }
    }

    return true;
}