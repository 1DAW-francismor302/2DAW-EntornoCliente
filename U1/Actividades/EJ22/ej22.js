"use strict"
{
    function contarPalabra(texto, palabra) {
        const palabras = texto.split(' ');
        let contador = 0;
        for (let i = 0; i < palabras.length; i++) {
            if (palabras[i] === palabra) {
            contador++;
            }
        }
        return contador;
    }

    console.log(contarPalabra("hola mundo adios mundo", "mundo"));
}