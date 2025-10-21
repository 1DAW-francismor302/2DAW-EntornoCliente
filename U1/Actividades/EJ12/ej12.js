"use strict"

{
    function convertir (p1, p2){
        p1 = parseInt(p1);
        if(p2 != 'C' && p2 != 'F'){

            console.log ("Datos inválidos.");
        }else{
            if(p2 === 'C'){
                p1 = p1+32;
                p2 = 'F';
            }else{
                p1 = p1 - 32;
                p2 = 'C';
            }

        }

        console.log(p1 + " " + p2);
    }

    convertir(0,'C');

}