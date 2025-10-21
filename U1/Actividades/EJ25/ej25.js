"use strict"
{
    function capicua(numero) {
        const num = numero.toString();
        const numReves = num.split('').reverse().join('');

        if (numReves === num) {
            return "Es capicúa";
        }else {
            return "No es capicúa";
        }
    }
    console.log(capicua(2002));
}