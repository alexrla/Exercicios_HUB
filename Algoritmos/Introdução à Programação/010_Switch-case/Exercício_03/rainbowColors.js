function corDoArcoIris(cor) {
    switch(cor[0].toUpperCase() + cor.slice(1)) {
        case "Vermelho":
            return 1;
        case "Laranja":
            return 2;
        case "Amarelo":
            return 3;
        case "Verde":
            return 4;
        case "Azul":
            return 5;
        case "Anil":
            return 6;
        case "Violeta":
            return 7;
        default:
            return "Não é uma cor do arco-íris";
    };
}