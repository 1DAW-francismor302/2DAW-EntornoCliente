"use strict"
{
    let numeros = [1,2,3,-4,5,6,-7,-3,-9];
    console.log(numeros.length);

    function esPar(numeros) {
        let contPares = 0;
        let contImpares = 0;
        let acumPares = 0;
        let acumImpares = 0;

        for (let i = 0; i < numeros.length; i++) {
            if (numeros[i] % 2 === 0) {
                contPares++;
                acumPares += ", " + numeros[i];
            }else {
                contImpares++;
                acumImpares += ", " + numeros[i];
            }
        }

        return "Hay " + contPares + " números pares los cuáles son: " + acumPares + " y " + contImpares + " números impares los cuáles son: " + acumImpares;
    }

    console.log(esPar(numeros));

    function sumarNegativos(numeros) {
        let suma = 0;
        for (let i = 0; i < numeros.length; i++) {
            if (numeros[i] < 0) {
                suma = suma + numeros[i];
            }
        }
        return suma;
    }

    console.log(sumarNegativos(numeros));

    function productoPositivos(numeros) {
        let producto = 1;

        for (let i = 0; i < numeros.length; i++) {
            if (numeros[i] > 0) {
                producto = producto * numeros[i];
            }
        }
        return producto;
    }
    console.log(productoPositivos(numeros));

    function esPrimo(numeros) {
        let contPrimos = 0;
        let primos;
        for (let i = 0; i < numeros.length; i++) {
            if (numeros[i] == 2 || numeros[i] == 3) {
                contPrimos++;
                primos += ", " + numeros[i];
            }
        }
        return "Hay " + contPrimos + " primos y son: " + primos;
    }

    console.log(esPrimo(numeros));

    function esMayor(numeros) {
        let mayor = 0;

        for (let i = 0; i < numeros.length; i++) {
            if (mayor < numeros[i]) {
                mayor = numeros[i];
            }
        }
        return "El número mayor es " + mayor;
    }

    console.log(esMayor(numeros));

    function esMenor(numeros) {
        let menor = 0;

        for (let i = 0; i < numeros.length; i++) {
            if (menor > numeros[i]) {
                menor = numeros[i];
            }
        }
        return "El número menor es " + menor;
    }

    console.log(esMenor(numeros));

    function mediaNumeros(numeros) {
        let acum = 0;
        let media = 0;
        let numerosMayores;
        let numerosMenores;

        for (let i = 0; i < numeros.length; i++) {
            acum += numeros[i];
        }

        media = acum/numeros.length;

        for (let i = 0; i < numeros.length; i++) {
            if (numeros[i] < media) {
                numerosMenores += ", " + numeros[i];
            }else {
                numerosMayores += ", " + numeros[i];
            }
        }

        return "La media es " + media + ", los números que están por encima de la media son: " + numerosMayores + " y los que están por debajo son: " + numerosMenores;
    }

    console.log(mediaNumeros(numeros));

    function ordenarNumeros(numeros){
        numeros.sort((a, b) => a - b);
        console.log(numeros);
        numeros.sort((a, b) => b - a);
        console.log(numeros);
    }

    ordenarNumeros(numeros);

    function buscarValor(numeros, aBuscar){
        let aparece=false;
        for(let i=0;i<numeros.length;i++){
            if(numeros[i]===aBuscar){
                console.log("El número si aparece");
                aparece=true;
            }
        }
        if(aparece==false){
            console.log("El número no aparece");
        }
    }

    buscarValor(numeros, 6);
}