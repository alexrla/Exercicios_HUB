function repeteComandos() {
    let i = 0;

    while(i < 6)    {
        soma1(i + 1);
        multiplica2(i + 1)

        i++;
    }
}

function soma1(num) {
    console.log(num+1);
}

function multiplica2(num){
    console.log(num*2)
}