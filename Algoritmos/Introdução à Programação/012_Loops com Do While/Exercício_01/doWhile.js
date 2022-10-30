function randomGen() {
    let randomNumber;

    do {

        randomNumber = Math.floor(Math.random() * 100);

        console.log(randomNumber);

    } while(randomNumber < 80)
}