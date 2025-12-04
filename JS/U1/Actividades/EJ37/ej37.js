"use strict"
{
    function devolver (numeros) {
        let numerosParesImpares = {
            pares: [],
            impares: []
        }

        for (let numero of numeros) {
            if (numero % 2 === 0) {
                numerosParesImpares.pares.push(numero);
            }else {
                numerosParesImpares.impares.push(numero);
            }
        }
        return numerosParesImpares;
    }
    let numeros = [6,9,2,-5,-9];
    console.log(devolver(numeros));
}