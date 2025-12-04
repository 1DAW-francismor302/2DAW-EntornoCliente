"use strict"
{
    function validarNombre(nombre) {
        const letras = nombre.toLowerCase().split('');
        
        for (let i = 0; i < letras.length; i++) {
            if ((!isNaN(letras[i])  && letras[i] != ' ') || letras[i] === '.' || letras[i] === '¿' || letras[i] === '!') {
                return "El nombre introducido no es válido.";
            }
        }
        return true;
    }

    console.log(validarNombre("Javier Ferrer 6")); 
}