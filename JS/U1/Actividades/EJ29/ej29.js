"use strict"
{
    function cambiarBase(numero, base){
        let nuevoNumero=0;
        if (base==2){
            nuevoNumero=parseInt(numero,2);
            console.log(nuevoNumero +" en base 10");
        }else if(base==10){
            nuevoNumero=parseInt(numero,10);
            console.log(nuevoNumero +" en base 2");
        }
    }

    cambiarBase(4, 10);
}