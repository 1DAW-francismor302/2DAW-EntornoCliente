"use strict"
{
    let hora = prompt("Dime la hora");
    let min = prompt("Dime los minutos");
    let seg = prompt("Dime los segundos");

    if (hora >= 24) {
        alert("Hora incorrecta");
    }else if (min >= 60){
        alert("Minuto incorrecto")
    }else if (seg >= 60){
        alert("Segundo incorrecto");
    }else if(seg == 59) {
        seg = 0;
        min++;
        if (min > 59) {
            min = 0;
            hora++;
            if (hora > 23) {
                hora = 0;
            }
        }
    }else {
        seg++;
    }
    console.log("Pasado un segundo: " + hora + ":" + min + ":" + seg)
}