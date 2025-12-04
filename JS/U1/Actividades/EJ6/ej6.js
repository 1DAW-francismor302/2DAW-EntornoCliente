
"use strict"

{

    let n1 = parseInt(prompt("Introduce el primer número:"));
    let n2 = parseInt(prompt("Introduce el segundo número:"));

    if (isNaN(n1) || isNaN(n2)) {
        console.log("Por favor, introduce números válidos.");
    } else {
    
        let diferencia1
        let diferencia2;
        
        if (n1 < n2) {
            diferencia1 = n1;
            diferencia2 = n2;
        } else {
            diferencia1 = n2;
            diferencia2 = n1;
        }

    
        for (let i = diferencia1+1; i <= diferencia2-1; i++) {
            if (i % 2 !== 0) {
                console.log(i);
            }     
        }   
    }


}