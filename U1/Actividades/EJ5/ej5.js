"use strict"
{
    let n1 = parseInt(prompt("Introduce un número"));
    let n2 = parseInt(prompt("Introduce un número"));
    
    let cont = 1;
    let numeros = 0;
    let diferencia = 0;

    if (n1 > n2){
        diferencia = n1-n2;
        do{
            numeros = n2+cont;
            console.log(numeros)
            cont++;
        }while (cont < diferencia)
    }else if (n2 > n1){
        diferencia = n2-n1;
        do{
            numeros = n1+cont;
            console.log(numeros);
            cont++;
        }while (cont < diferencia)
    }else{
        console.log("Los dos números son iguales");
    }
}