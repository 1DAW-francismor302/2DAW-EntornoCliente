"use strict"
{
    let cadenas=["javi","pablo","carmelo","domingo"];

    function cadenaCorta(cadenas){
        let cadenaCorta=cadenas[0];
        for(let i=0; i<cadenas.length;i++){
            if(cadenaCorta.length>cadenas[i].length){
                cadenaCorta = cadenas[i];
            }
        }
        console.log(cadenaCorta);
    }

    function cadenaLarga(cadenas){
        let cadenaLarga=cadenas[0];
        for(let i=0; i<cadenas.length;i++){
            if(cadenaLarga.length<cadenas[i].length){
                cadenaLarga = cadenas[i];
            }
        }
        console.log(cadenaLarga);
    }
    
    function cadenaConMasA(cadenas){
        let cadenaConMasA=cadenas[0];
        let contA=0;
        let contActual=0;
        for(let i=0; i<cadenas.length;i++){
            let actual = cadenas[i].split("");
            for(let j=0;j<cadenas[i].length;j++){
                if(actual[j]== "a"){
                    contActual++;
                }
            }

            if(contActual>contA){
                contA=contActual;
                cadenaConMasA=cadenas[i];
            }
            
        }

        console.log(cadenaConMasA);
    }

    function contieneB(cadenas){
        let cont=0;
        let cades=new Array();
        for(let i=0;i<cadenas.length;i++){
            if(cadenas[i].toLowerCase().includes("b")){
                cades[cont]=cadenas[i];
                cont++;
            }
        }

        console.log("Hay "+cont+ " palabra(s) que contienen la letra b");
        console.log("Las palabras son: " +cades);
    }

   


    cadenaCorta(cadenas);
    cadenaLarga(cadenas);
    cadenaConMasA(cadenas);
    contieneB(cadenas);
}