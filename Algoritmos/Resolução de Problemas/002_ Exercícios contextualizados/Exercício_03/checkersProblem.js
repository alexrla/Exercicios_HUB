function numMov(casaIni, casaFin){
    let movimentos = 2;

    const vertical = (casaIni[0] === casaFin[0] && casaIni[1] !== casaFin[1]);

    const horizontal = (casaIni[0] !== casaFin[0] && casaIni[1] === casaFin[1]);

    const diagonal = (Math.abs(casaIni[0] - casaFin[0]) == Math.abs(casaIni[1] - casaFin[1]));

    if (casaIni[0] === casaFin[0] && casaIni[1] === casaFin[1]) movimentos = 0;
    else if (vertical || horizontal || diagonal) movimentos = 1;

    return movimentos;
}

/* Outra solução */
function numMov(lst1, lst2){
    let difX = Math.abs(lst1[0] - lst2[0]);

    let difY = Math.abs(lst1[1] - lst2[1]);

    if(lst1[0] == lst2[0] && lst1[1] == lst2[1]) return 0;
    else if(lst1[0] == lst2[0] || lst1[1] == lst2[1] || difX == difY) return 1;
    else return 2;
}