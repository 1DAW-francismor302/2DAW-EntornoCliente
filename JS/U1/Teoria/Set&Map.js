"use strict"
{
    // SET

    let mySet = new Set();

    mySet.add(1);
    mySet.add(5);
    mySet.add(5);

    console.log(mySet); // Set(2) { 1, 5 }

    mySet.add("Hello");
    mySet.add({a:1, b:2});
    mySet.add({a:1, b:2}); // Different object reference
    mySet.add(1); // Duplicate, won't be added

    console.log(mySet); // Set(4) { 1, 5, 'Hello', { a: 1, b: 2 } }

    mySet.add("HELLO");; // Different from "Hello"

    for (let item of mySet) {
        console.log(item);
    };

    mySet.forEach((elem) => {
        console.log(elem);
    });

    // Transformar Set a Array

    let myArray = Array.from(mySet);
    console.log(myArray); // [ 1, 5, 'Hello', { a: 1, b: 2 }, { a: 1, b: 2 }, 'HELLO' ]

    //Crear Set a partir de un Array

    let array2 = [1,2,3,4,5,5,5,6,7,8,8,9];
    let mySet2 = new Set(array2);
    console.log(mySet2); // Set(9) { 1, 2, 3, 4, 5, 6, 7, 8, 9 }

    mySet2.has(5); // true
    mySet2.has(10); // false

    mySet2.delete(5);
    console.log(mySet2); // Set(8) { 1, 2, 3, 4, 6, 7, 8, 9 }
    mySet2.clear();
    console.log(mySet2); // Set(0) {}

    // MAP: collecion de datos identificados por claves

    let myMap = new Map();
    myMap.set("nombre", "Juan");
    myMap.set("edad", 30);
    myMap.set(1, "uno");
    myMap.set(true, "verdadero");
    console.log(myMap); // Map(4) { 'nombre' => 'Juan', 'edad' => 30, 1 => 'uno', true => 'verdadero' }

    console.log(myMap.size); // 4

    console.log(myMap.has("edad")); // true
    console.log(myMap.has("apellido")); // false

    console.log(myMap.get("nombre")); // Juan
    console.log(myMap.get(1)); // uno
    myMap.set(1, "nuevo valor");
    console.log(myMap.get(1)); // nuevo valor

    myMap.set({}, 10);
    console.log(myMap.get({})); // undefined, different object reference

    // Recorrer un Map

    for (let [key, value] of myMap) {
        console.log(key + " = " + value);
    }

    myMap.forEach(elem => console.log(elem));

    myMap.forEach((value, key) => {
        console.log(key, value);
    });

    myMap.forEach(function(value, key){
        console.log(key + ": " + value);
    });

    let map2 = new Map([["a",1], ["b",2], ["c",3]]);
    console.log(map2); // Map(3) { 'a' => 1, 'b' => 2, 'c' => 3 }

    let map2Keys = [...map2.keys()];
    console.log(map2Keys); // [ 'a', 'b', 'c' ]

    let map2Values = [...map2.values()];
    console.log(map2Values); // [ 1, 2, 3 ]
    
}