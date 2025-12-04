"use strict"
{
    function esPalindromo(texto) {
        let texto1 = texto.split('').reverse().join('');

        if (texto === texto1) {
            return true;
        }else {
            false;
        }
    }

    console.log(esPalindromo("salas"));
}