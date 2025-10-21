"use strict"
{
    //FORMAS DE DECLARAR UN ARRAY
    let myArray = [];
    myArray[0] = 10;
    myArray[1] = 20;
    myArray[3] = "Martínez";
    console.log(myArray);

    let myArray2 = new Array ();
    myArray2[0] = 30;
    myArray2[1] = "30";

    let myArray3 = ["gamusino", "up", "globo"];

    console.log(`El array tiene ${myArray3.length} elementos`);
    
    //CLONADO DE UN ARRAY

    let myArray4 = new Array();
    myArray4 = [...myArray,...myArray2,...myArray3];
    console.log(myArray4)

    //ARRAYS BIDIMENSIONALES
    //FORMA 1:

    let myArrayBi1 = new Array();
    myArrayBi1[0] = [1,2,3,4,5];
    myArrayBi1[1] = [2,3,4,5,6];
    myArrayBi1[2] = [3,4,5,6,7];
    myArrayBi1[2][4] = "A";
    console.log(myArrayBi1);

    //FORMA 2:

    let numFilas = 2;
    let numColumnas = 3;
    let myArrayBi2 = new Array (numFilas);
    for (let i = 0; i < numFilas; i++) {
        myArrayBi2[i] = new Array (numColumnas);
    };

    console.log(myArrayBi2);
    for (let i = 0; i < numFilas; i++) {
        for (let j = 0; j < numColumnas; j++) {
            myArrayBi2[i][j] = 0;
        }
    }
    console.log(myArrayBi2);

    //FORMA 3:

    let myArrayBi3 = Array.from(Array(2), () => new Array(3));
    console.log(myArrayBi3);
    for (let i = 0; i < numFilas; i++) {
        for (let j = 0; j < numColumnas; j++) {
            myArrayBi2[i][j] = 0;
        }
    }
    console.log(myArrayBi3);

    //FORMA 4:

    let myArrayBi4 = new Array (5).fill().map(() => new Array(4));

    console.log(myArrayBi4);

    //OPERACIONES CON ARRAYS

    //JOIN

    console.log("\tJOIN:");
    const elements = ["fire", "air", "water"];
    let str = elements.join();
    console.log(str);
    console.log(elements);

    //split

    console.log("\n\tSPLIT:");
    const strNumbers = "1,2,3,4,5,6,7,8,9,10";
    const myArrayNumbers = strNumbers.split(",");
    console.log(myArrayNumbers);

    //PUSH
    
    console.log("\n\tPUSH:");
    elements.push("earth");
    console.log(elements);

    //POP

    console.log("\n\tPOP:");
    let myElement = elements.pop();
    console.log(myElement);
    console.log(elements);

    //SHIFT

    console.log("\n\tSHIFT:");

    let firstElement = elements.shift();
    console.log(firstElement);
    console.log(elements);

    //REVERSE --> MODIFICA EL ARRAY ORIGINAL

    const reverseElements = elements.reverse();
    console.log(reverseElements);
    console.log(elements);

    //SORT --> MODIFICA EL ARRAY ORIGINAL

    console.log("\n\tSORT:");
    let myNumbers = [100, 5, 15, 1, 99];
    myNumbers.sort();
    console.log(myNumbers);
    myNumbers.sort(function (first, second) {
        if (first < second) {
            return 1;
        }else {
            return -1;
        }
    });
    console.log(myNumbers);

    myNumbers.sort( (a,b) => a > b ? 1 : -1 )
    console.log(myNumbers);

    myNumbers.sort( (a,b) => a-b); // > --> de menor a mayor
    myNumbers.sort( (a,b) => b-a); // < --> de mayor a menor




    // slice(inicio, [final]) --> desde inicio hasta final -1

    console.log("\nSLICE:");
    let nombres = ["Rita", "Manuel", "Miguel", "Ana", "Vanesa"];

    let nombresMasculinos = nombres.slice(1,3);
    console.log(nombresMasculinos);
    console.log(nombres.slice(-2)); // Los 2 últimos

    // filter: crea un nuevo array con los elementos filtrados

    console.log("\nFILTER:");
    let users = [
        { name: "John", age: 34},
        { name: "Any", age: 20},
        { name: "Amador", age: 25},
        { name: "Thomas", age: 10}
    ];
    let filteredUsers = users.filter(function (user) {
        return user.age > 15;
    });

    console.log(filteredUsers);

    let filteredUsers2 = users.filter ( (user) => user.age > 15);

    console.log(filteredUsers2);

    // find: devuelve el 1º elemento del array que cumple la condicion

    let user = users.find( function (user) {
        return user.name.match(/A[a-z]*/);
    });
    console.log(user);
    let user2 = users.find ((user) => user.name.match (/A[a-z]*/));
    console.log(user2);
    // probar también con el flag g en la expresión regular

    // some --> true/false. Comprueba si al menos un elemento cumple la condición
    console.log("\n\SOME");
    let hasUser = users.some ( function (user) {
        return user.age === 10;
    });
    hasUser?console.log("PO ZI"):console.log("PO NO");

    let hasUser2 = users.some ( (user) => user.age === 20);
    hasUser2?console.log("PO ZI"):console.log("PO NO");

    //findIndex --> devuelve el índice del primer elemento del array que cumpla la condición. -1 SI NO ENCUENTRA

    console.log("\n\FINDINDEX:");
    let index = users.findIndex( function (user) {
        return user.age === 25;
    });
    console.log(index);

    let index2 = users.findIndex( (user) => user.age === 25);
    console.log(index2);

    // concat --> concatena arrays. COPIA POR VALOR
    
    console.log("\n\CONCAT:");
    let array1 = ["a", "b", "c"];
    let array2 = ["d", "e", "f"];
    let array3 = array1.concat(array2);
    console.log(array3);
    array1[2] = "X";
    console.log(array3);
    let array4 = [...array1,...array2]; //LO MISMO QUE CONCAT
    console.log(array4);
    array2[2] = "Z";
    console.log(array4);

    // reduce (acumulador, valorActual)

    console.log("\n\REDUCE");
    let numbers = [1,2,3,4,5];
    let sumaTotal = numbers.reduce(function (acumulador, valorActual) {
        acumulador = acumulador + valorActual;
        return acumulador;
    }); // El 0 es el valor inicial de la variable acumulador
    console.log(`La suma de los valores del array es ${sumaTotal}`);

    let sumaTotal2 = numbers.reduce( (acumulador, valorActual) => {
        acumulador = acumulador + valorActual;
        return acumulador;
    }); // El 0 es el valor inicial de la variable acumulador
    console.log(`La suma de los valores del array es ${sumaTotal2}`);

    const miArrayNumeros = [[0,1],[2,3],[4,5]]; // --> [0,1,2,3,4,5]
    let arrayCompleto = miArrayNumeros.reduce( (acc, valorActual) => acc.concat(valorActual), []);
    console.log(arrayCompleto);

    // includes () --> true/false

    const motos = ["yamaha", "ducati", "kawasaki"];
    console.log(motos.includes("vespa")); //false
    console.log(motos.includes("ducati")); //true

    /**
     * ITERAR SOBRE UN ARRAY
     * - for
     * - forEach
     * - map
     * - for of
     */

    // FOR

    let vector = [1,2,"A","F",-1,2.4];
    for (let i = 0; i < vector.length; i++) {
        console.log(vector[i]);
    };

    //FOREACH

    vector,forEach(function(elem) {
        console.log(elem);
    });

    vector.forEach(function (elem, index) {
        console.log("En la posición " + index + " nos encontramos el elemento " + elem);
    });

    vector.forEach((elem, index) => console.log("En la posición " + index + " nos encontramos el elemento " + elem));

    //MAP --> devuelve cada elemento y hay que guardarlo en un nuevo array si se quiere

    let vector2 = vector.map( function (elem) {
        console.log(elem);
        //return elem;
    })
    console.log(vector2)

    let vector3 = vector.map(elem => elem * 2);
    console.log(vector3);

    // let users = [
    //     { name: "John", age: 34},
    //     { name: "Any", age: 20},
    //     { name: "Amador", age: 25},
    //     { name: "Thomas", age: 10}
    // ];

    let arrayAges = users.map (user => user.age);
    let sumaEdades = arrayAges.reduce( (acumulador, valorActual) => acumulador += valorActual, 0);
    console.log(arrayAges);
    console.log(sumaEdades);


    let fullUsers = users.map( user => {
        return {
            ...user,
            city: "Jalisco"
        };
    });

    console.log(fullUsers);


    let fullUsers2 = users.map (user => {
        return {
            ...user,
            age: user.age * 2
        };
    });
    console.log(fullUsers2);


    //FOR OF
    for (let user of users) {
        console.log(user);

    }

    
    


}