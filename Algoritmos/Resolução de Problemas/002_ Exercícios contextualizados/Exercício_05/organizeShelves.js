function organizar(items) {
    const result = [];

    while(items.length > 0)   {
        const subArray = [];
        
        let count = 0;

        while(count < 3 && items.length !== 0)   {
            if(count + 1 === 3)  {
                
                subArray.push(Math.max(...items));

                items.splice(items.indexOf(Math.max(...items)), 1);

            } else  {

                subArray.push(Math.min(...items));

                items.splice(items.indexOf(Math.min(...items)), 1);

            } 

            count++;
        }

        result.push(subArray);
    }

    return result;
}

/* Outra solução */
function organizar(items) {
    items.sort((a, b) => a - b);
    const prateleiras = [];

    let menor = 0;
    let maior = items.length - 1;

    while (menor <= maior) {
        let line;

        if (menor <= maior - 2) {

            line = [items[menor], items[menor + 1], items[maior]];

        } else if (menor === maior - 1) {

            line = [items[menor], items[maior]];

        } else {

            // menor === maior
            line = [items[menor]];

        }

        menor += 2;
        maior -= 1;

        prateleiras.push(line);
    }
    
    return prateleiras;
}