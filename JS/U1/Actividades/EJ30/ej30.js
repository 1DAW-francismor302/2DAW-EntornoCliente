"use strict"
{
    let fechaNacimiento = prompt("Introduce tu edad");

    let dia = fechaNacimiento.substring(0, 2);
    let mes = fechaNacimiento.substring(3, 5);
    let anyo = fechaNacimiento.substring(6, 10);

    let edad = 2025 - anyo;

    if (mes == 10) {
        if (dia > 16) {
            edad--;
        }
    }if (mes > 10) {
        edad--;
    }

    console.log("Tu edad es: " + edad)

}