"use strict"

{
    function dibujarPatron (caracter, numero) {

        if(numero <= 0){
            console.log("El índice introducido no es válido.");
        }else{
            for(let i = 0; i < numero ; i++){
                let pintar= ' ';
                for(let j = (numero-i); j > 0; j--){
                    pintar += caracter;
                }
                console.log(pintar);
            }
        }
    }
    dibujarPatron('A', 5);
}