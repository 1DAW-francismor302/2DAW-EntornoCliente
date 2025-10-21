"use strict"
{
    //FUNCIONES DE CADENA
     function comprobarCadena1 (cadena) {
        cadena = cadena.toLowerCase();
        if ((cadena.charAt(0) === 'm' || cadena.charAt(0) === 'd') && (cadena.charAt(cadena.length - 1) === 'a' || cadena.charAt(cadena.length - 1) === 'o')){
            return true;
        }else{
            return false;
        }
    }

    //EXPRESION REGULAR
    function comprobarCadena2 (cadena) {
        let regExp = /^(m|d).*(a|o)$/i;
        return regExp.test(cadena);
    }
    
}