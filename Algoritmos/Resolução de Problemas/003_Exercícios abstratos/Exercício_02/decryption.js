function descriptografar(inicio, arr) {
    let str = [];

    while(Number(inicio) !== -1) {
        if(arr[inicio] === undefined) return "erro";

        str.push(arr[inicio].split("_")[0]);

        inicio = arr[inicio].split("_")[1];
    }

    return str.join(" ");
}

/* Outra solução */
function descriptografar(inicio, arr) {

    let mensagem = [];
    let proxima = inicio;

    while (proxima !== -1 && proxima < arr.length) {
        let palavra = arr[proxima].split("_")[0];

        proxima = Number(arr[proxima].split("_")[1]);

        mensagem.push(palavra);
    }

    if (proxima >= arr.length) {
        return "erro";
    }

    return mensagem.join(" ");
}