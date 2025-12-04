"use strict"
{
    function getEdad (fecha) {
        let anyo = fecha.getFullYear();
        let mes = fecha.getMonth();
        let dia = fecha.getDate("");

        let fechaActual = new Date();
        let anyoActual = fechaActual.getFullYear();
        let mesActual = fechaActual.getMonth();
        let diaActual = fechaActual.getDate();

        let edad = anyoActual - anyo - 1;
        if (mes === mesActual){
            if (dia < diaActual){
                edad++;
            }
        }else if (mes < mesActual){
            edad++;
        }

        return edad;
    }

    console.log(getEdad(new Date("10/11/2006")));
}