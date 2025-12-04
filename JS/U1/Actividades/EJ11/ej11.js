"use strict"

{
    function esPar (n){
        let respuesta;
        let par=true;

        if(n % 2 == 0){
            respuesta = "par";
            par = true;
        }else{
            respuesta = "impar";
            par = false;
        }

        console.log ("El número " + n + " es " + respuesta)
    }
    esPar(29);
}