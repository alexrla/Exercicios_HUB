function retornaPalavra(char) {
    switch(char.toUpperCase()) {
        case "A":
            return "Abacaxi";
        case "E":
            return "Embaúba";
        case "I":
            return "Ingá";
        case "O":
            return "Oiti";
        case "U":
            return "Uva";
        default:
            return "Não é vogal"
    };
}