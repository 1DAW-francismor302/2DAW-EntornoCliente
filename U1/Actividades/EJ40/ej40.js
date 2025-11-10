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

        let edad = anyoActual - anyo - 1; // suma la diferencia de años menos 1,
        if (mes === mesActual){           // ya que tiene que comprobar si este 
            if (dia < diaActual){         // año has cumplido años o no
                edad++;
            }
        }else if (mes < mesActual){
            edad++;
        }

        return edad;
    }

    console.log(getEdad(new Date("11/02/2005")));
}