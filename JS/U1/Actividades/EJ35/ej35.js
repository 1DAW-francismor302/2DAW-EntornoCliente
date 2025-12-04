"use strict"
{
    let array = [1,4,5];
    elevarAlCuadrado(array);

    function elevarAlCuadrado (array) {
        let arrayAlCuadrado = array.map(elem => elem * elem);
        console.log(arrayAlCuadrado);
    }
}