function desenhaAmpulheta(n) {
    for(let i = 0; i < n; i++)  {
        let str = "";

        for(let j = 0; j < n; j++)  {
            if(i === 0) {
                str += "*";
            }

            else if(i + j ===  n - 1)    {
                str += "*";
            }

            else if(i === j)    {
                str += "*";
            }

            else if(i === n - 1) {
                str += "*";
            }

            else {
                str += " ";
            }
        }

        console.log(str);
    }
}

/* Outra solução */
function desenhaAmpulheta(n){
    for(let i = 0; i < n ; i++) {
        let str = "";

        if (i == 0 || i ==  n-1)    {

            for(let j = 0; j < n; j++)  {
                str += "*";
            }

        } else  {

            for(let j = 0; j < n; j++)  {
                if( j == i || j == n - 1 - i)   {

                    str += "*";

                } else  {
                    
                    str+= " ";
                    
                }
            }
        
        }

        console.log(str);
    }
}