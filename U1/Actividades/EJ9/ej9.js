"use strict"
{

    let n1 = parseInt(prompt("Introduce un número: "));
    let n2 = parseInt(prompt("Introduce un número: "));
    let operaciones = prompt("Introduce la operación, puede ser: '+' '-' '/' '*' ");

    switch (operaciones) {
        case '+': 
            console.log(n1 + n2);
            break;
        case '-':
            console.log(n1 - n2);
            break;
        case '/':
            console.log(n1 / n2);
            break;
        case '*':
            console.log(n1 * n2);
            break;
        
    }

}