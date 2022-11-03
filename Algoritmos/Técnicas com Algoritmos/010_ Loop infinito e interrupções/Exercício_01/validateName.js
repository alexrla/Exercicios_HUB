function validaNome(hub) {
    let nome = hub.perguntaNome();

    while(nome.length < 3)  {
        console.log("Nome inválido, insira no mínimo 3 caracteres");
        nome = hub.perguntaNome();
    }

    return nome;
}