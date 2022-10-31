function expoenteDaBaseDois(n) {
    let count = 0;

    while(n > 1) {
        n /= 2;
        count++;
    }

    return count;
}

/* Outra solução */
function expoenteDaBaseDois(n){
    if (n == 1) return 0;

    let total = 0;

    while(n / 2 != 1)   {
        total += 1;

        n = n / 2;
    }

    return total + 1;
}