function calculaUmaRaiz(a, b, c, sinal) {
    if(sinal) {

        return (- b + Math.sqrt((b ** 2) - (4 * a * c))) / (2 * a);

    } else {

        return (- b - Math.sqrt((b ** 2) - (4 * a * c))) / (2 * a);

    }
}