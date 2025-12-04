"use strict"

{
    let n = parseInt(prompt("Introduce un número: "));

    

    console.log("Los divisores son:");

    
    for (let i = 1; i <= n; i++) {
        
        if (n % i === 0) {
            console.log(i);
        }
    }


}