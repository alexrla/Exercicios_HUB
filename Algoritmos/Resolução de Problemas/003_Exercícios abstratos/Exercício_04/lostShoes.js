function formarPar (arr) {
    const result = [];

    for(let i = 0; i < arr.length; i++) {
        let count = 0;

        for(let j = 0; j < arr[i].length; j++) {
            const size = arr[i][j];

            if(size.split(" ")[1] == "E") {

                if(!arr[i].includes(`${size.split(" ")[0]} D`)) continue;

            } else {

                if(!arr[i].includes(`${size.split(" ")[0]} E`)) continue;

            }

            for(let z = j + 1; z < arr[i].length; z++) {
                if(
                    size.split(" ")[0] == arr[i][z].split(" ")[0] &&
                    (
                        (size.split(" ")[1] == "E" && arr[i][z].split(" ")[1] == "D") ||
                        (size.split(" ")[1] == "D" && arr[i][z].split(" ")[1] == "E")
                    )
                ) {

                    count++;

                    arr[i].splice(arr[i].indexOf(arr[i][z]), 1);

                    break;

                }
            }
        }

        result.push(count);
    }

    return result;
}

/* Outras soluções */
// - 1
function formarPar (arr) {
    const result = [];

    for(let i = 0; i < arr.length; i++) {
        let count = 0;
        let lot = arr[i];

        for(let j = 0; j < lot.length; j++) {
            const number = lot[j].split(" ")[0];
            const foot = lot[j].split(" ")[1];
            let sizeWanted;

            if(foot === "E")    {
                if(!lot.includes(`${number} D`)) continue;
                else sizeWanted = `${number} D`
            } else {
                if(!lot.includes(`${number} E`)) continue;
                else sizeWanted = `${number} E`
            }

            for(let z = j + 1; z < lot.length; z++) {
                if(sizeWanted === lot[z]) {
                    count++;
                    lot.splice(lot.indexOf(lot[z]), 1);
                    break;
                }
            }
        }

        result.push(count);
    }

    return result;
}

// - 2 
function formarPar(arr) {
    let pares = [];
    for (let i = 0; i < arr.length; i++) {

        let lote = arr[i];
        let par = 0;

        for (let j = 0; j < lote.length; j++) {
            let numero = lote[j].split(' ')[0];

            let pe = lote[j].split(' ')[1];

            let procuraPar;

            if (pe === 'D') {

                procuraPar = `${numero} E`;

            } else {

                procuraPar = `${numero} D`;

            }

            console.log(numero)

            for (let z = j + 1; z < lote.length; z++) {
                if (lote[z] === procuraPar) {
                    console.log(lote[z], procuraPar);
                    par++;
                    lote[z] = '';
                    break;
                }
            }

            pares[i] = par;

        }
    }
    
    return pares;
}