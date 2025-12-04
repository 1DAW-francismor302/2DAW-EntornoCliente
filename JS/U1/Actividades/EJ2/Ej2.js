"use strict"
{

    do {
        let a = prompt("Porfavor, introduce un número:");
        let b = prompt("Porfavor, introduce otro número:");
    }while (isNaN(a) || isNaN(b) || a <= 0 || b <= 0);

    
    if (a > b) {
        console.log(a + " es mayor que " + b);
    }else if (a < b) {
        console.log(a + " es menor que " + b);
    }else if (a === b) {
        console.log("Son iguales")
    }
}