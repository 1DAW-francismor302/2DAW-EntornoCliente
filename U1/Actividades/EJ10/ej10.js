"use strict"
{
    
    let n = prompt("Introduce un número: ");
    function esPrimo (n) {
        if(n == 2 || n == 3) {
            return true;
        }else{
            if (n  % 2 != 0 ||  n % 3 != 0){
                return false;
            }
        }
    }

    console.log(esPrimo());
}