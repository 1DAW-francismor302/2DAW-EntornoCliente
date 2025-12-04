"use strict"
{
    let numero = 0;
    let cont = 0;
    let acum = 0;
    let media = 0;

    do {
        acum = acum + numero;
        cont++;
        numero = parseInt(prompt("Introduce un número"));
    }while (numero >= 0);

    if (cont - 1 >0 ) {
        media = acum / (cont - 1);
    }
    console.log("La suma es: " + acum + " y la media es: " + media);
}
        