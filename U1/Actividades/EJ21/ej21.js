"use strict"
{
    function miFuncionInvertirPalabras(cadena) {
        return cadena
        .split(' ')
        .map(palabra => palabra.split('').reverse().join(''))
        .join(' ');
    }

    console.log(miFuncionInvertirPalabras("Hola Mundo"));
}