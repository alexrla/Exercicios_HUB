function verificaLetra(c) {
    const vowels = ["a", "e", "i", "o", "u"];

    if(vowels.includes(c)) return "Vogal";
    else return "Consoante";
}

/* Outra solução */
function verificaLetra(c) {
    if(c === "a" || c === "e" || c === "i" || c === "o" || c === "u") return "Vogal";
    else return "Consoante";
}