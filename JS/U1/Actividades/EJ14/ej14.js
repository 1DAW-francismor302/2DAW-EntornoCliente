"use strict"

{
    let precioConDescuento;

    function calcularDescuento (p1, p2) {

        if(p1 <= 0 && p2 <= 0){
            console.log("El descuento no es válido");
        }else{
            precioConDescuento = (p1 * p2) / 100;
            console.log(p1-precioConDescuento);
        }
    }

    calcularDescuento(1000, 20);
}