"use strict"
{
    function contarVoc(texto) {
        const palabras = texto.toLowerCase().split('');
        let contadorVocales = 0;
        let contadorConsonantes = 0;
        for (let i = 0; i < palabras.length; i++) {
            if (palabras[i] === 'a' || palabras[i] === 'e' || palabras[i] === 'i' || palabras[i] === 'o' || palabras[i] === 'u') {
                contadorVocales++;
            }else {
                contadorConsonantes++;
            }
        }
        return "Vocales: " + contadorVocales + " Consonantes: " + contadorConsonantes;
    }

    console.log(contarVoc("hola mundo adios mundo"));
}