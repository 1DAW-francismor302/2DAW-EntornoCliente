"use strict"
{

    function sumar (n1, n2) {
        return n1 +n2;
    }

    // () => ;
    () => console.log("arrow function");
    const s = (n1, n2) => n1 + n2;
    console.log(s(10, 20));

    (param1, param2, param3=0) => {
        console.log(param1);
        console.log(param2);
        console.log(param3);
        return param1 + param2 + param3;
    }
    console.log(s(10, 20, 30));

    function fParaTransformarAFlecha () {
        return prompt("How old are you?", 8);
    }

    const fEnFlecha = () => prompt("How old are you?", 8);
    console.log(fEnFlecha());

    const f = function (param1, param2) {
        console.log(param1);
        console.log(param2);
        return "XXX";
    }

    const f2EnFlecha = (param1, param2) => {
        console.log(param1);
        console.log(param2);
        return "XXX";
    };

    console.log(f2EnFlecha(10, 20));
    let x = f2EnFlecha(10, 20);
    console.log(x);
    
}