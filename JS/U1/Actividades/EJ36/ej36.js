"use strict"
{
    function devolver (numeros)  {

        let numGrande = 0;
        let numPequeno = 0;

        for (let numero of numeros) {
            if (numero > numGrande) {
                numGrande = numero;
            } else if (numero < numPequeno) {
                numPequeno = numero;
            }else {
                numGrande = numGrande;
                numPequeno = numPequeno;
            }
        }
        return "El número mayor es: " + numGrande + " y el número menor es: " + numPequeno;
    }

    let numeros = [6,9,2,-5,-9];
    console.log(devolver(numeros));
}