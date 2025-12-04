"use strict" 
{
    // EXERCISE 1: Using prompt, ask a number N to an user and create in DOM N paragraphs with a random number between 0 and 10 each one.

    // let numberOfParagraphs = parseInt(prompt("Introduce el número de párrafos que quieras crear:"));

    // for (let i = 0; i < numberOfParagraphs; i++) {
    //     let randomNum = Math.floor(Math.random() * 11);
    //     let p = document.createElement("p");
    //     p.textContent = randomNum;
    //     document.body.appendChild(p);
    // }

    //EXERCISE 2: Using prompt, ask a number N to an user and create in DOM N H2 elements writing 
    // inside a paragraph your name in bold and italic + a random number between 0 and 10.

    // let nH2 = parseInt(prompt("Introduce el número de H2 que quieras crear:"));

    // for (let i = 0; i < nH2; i++) {
    //     let randomNum = Math.floor(Math.random() * (10 - 1) + 1);
    //     let h2 = document.createElement("h2");
    //     h2.innerHTML = "<p><b><i>Fco Javier</i></b> " + randomNum + "</p>";
    //     document.body.appendChild(h2);
    // }

    // EXERCISE 3: Using prompt, ask a number N to an user and create in DOM an 
    // unordered list with N random numbers between 1 and 15 for each element in bold.

    let nLi = parseInt(prompt("Introduce el número de elementos de la lista que quieras crear:"));

    let ul = document.createElement("ul");
    for (let i = 0; i < nLi; i++) {
        let randomNum = Math.floor(Math.random() * (15 - 1) + 1);
        let li = document.createElement("li");
        li.innerHTML = "<b>" + randomNum + "</b>";
        ul.appendChild(li);
    }
    document.body.appendChild(ul);


}