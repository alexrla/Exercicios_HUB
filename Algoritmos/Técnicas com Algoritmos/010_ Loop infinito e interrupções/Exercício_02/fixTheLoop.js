function generateRandom(){
    let num, count = 0;

    do  {

        count ++;

        num = Math.floor(Math.random() * 10) + 1;

        console.log(num);

    } while(count < 10)
}