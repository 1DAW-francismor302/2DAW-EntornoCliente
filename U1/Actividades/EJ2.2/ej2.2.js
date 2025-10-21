"use strict"
{
    const comprobarString = (cadena) => {
        let regExp2 = /[0-9]/g;
        return cadena.match(regExp2);
    }
    
    console.log(comprobarString("Hola soy javi tengo 21 años y mido 1.77"))
}