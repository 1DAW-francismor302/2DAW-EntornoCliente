"use strict"
{
    console.log("Math.PI:", Math.PI);
    console.log("Math.E:", Math.E);
    console.log("Math.LN2:", Math.LN2);
    console.log("Math.LN10:", Math.LN10);

    let f = 37.6;
    console.log(Math.floor(f)); // 37
    console.log(Math.ceil(f)); // 38
    console.log(Math.round(f)); // 38
    

    let a = -37.6;
    console.log(Math.floor(a)); // -38
    console.log(Math.ceil(a)); // -37
    console.log(Math.round(a)); // -38 

    console.log(Math.abs(f)); // 37.6
    console.log(Math.min(10,20,7,38,4)); // 4
    console.log(Math.max(10,20,7,38,4)); // 38
    console.log(Math.pow(2,4)); // 16
    console.log(Math.sqrt(121)); // 11
    console.log(Math.random()); // Random number between 0 and 1

    console.log(Math.round(Math.random() * 10)); // Random integer between 0 and 10
    console.log(Math.floor(Math.random() * 10)); // Random integer between 0 and 9
    console.log(Math.ceil(Math.random() * 10)); // Random integer between 1 and 10

    console.log(Math.random() * (100 - 10) + 10); // Random number between 10 and 100
    console.log(Math.round(Math.random() * (100 - 10) + 10)); // Random integer between 10 and 100
    
    

}