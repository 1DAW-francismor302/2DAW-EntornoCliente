"use strict"
{
    let a = prompt("Porfavor, introduce un número:");
    let b = prompt("Porfavor, introduce otro número:");

    if (a > b) {
        console.log(a + " es mayor que " + b);
    }else if (a < b) {
        console.log(a + " es menor que " + b);
    }else if (a = b) {
        console.log("Son iguales")
    }
}