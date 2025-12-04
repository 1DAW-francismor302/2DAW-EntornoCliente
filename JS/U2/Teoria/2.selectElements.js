"use strict"
{
    /**
     * getElementsByTagName -> HTMLCollection
     * getElementsByClassName -> HTMLCollection
     * getElementsByName -> NodeList
     * getElementById -> Element
     * querySelector -> Element
     * querySelectorAll -> NodeList
     */

    let listaA = document.getElementsByTagName("a"); // HTMLCollection de todos los enlaces
    console.log(listaA);
    console.log(listaA.length);
    for (let a of listaA) {
        console.log(a); // Elemento <a>
        console.log(a.href); // Atributo href
        console.log(a.textContent); // Texto del enlace
    }

    let listaUls = document.getElementsByClassName("cListaVehiculos"); // HTMLCollection de todos los elementos con esa clase
    console.log(listaUls.length);
    console.log(listaUls);
    console.log(listaUls[0]);
    for (let ul of listaUls) {
        console.log(ul);  // Elemento <ul>
        console.log(ul.id); // Atributo id
        console.log(ul.className); // Atributo class
        console.log(ul.textContent); // Texto del ul
    }

    listaUls = document.getElementsByName("nLista"); // NodeList de todos los elementos con ese nombre
    console.log(listaUls);
    listaUls.forEach(element => {
        console.log(element); // Elemento <ul>
        console.log(element.textContent); // Texto del ul
    });

    let ul = document.getElementById("idAviones"); // Element con ese id
    console.log(ul);
    console.log(ul.textContent);

    let myCar = document.querySelector("#idCoches"); // Primer elemento que coincide con el selector CSS
    console.log(myCar);
    console.log(myCar.textContent);

    let myCharacter = document.querySelector(".cListaPersonajes"); // Primer elemento que coincide con el selector CSS
    console.log(myCharacter);
    console.log(myCharacter.textContent);

    let myP = document.querySelector("p"); // Primer elemento que coincide con el selector CSS
    console.log(myP);
    console.log(myP.textContent); // = console.log(myP.innerText);

    let listaP = document.querySelectorAll("p"); // NodeList de todos los elementos que coinciden con el selector CSS
    listaP.forEach(p => {
        console.log(p);
        console.log(p.textContent);
    });

    listaUls = document.querySelectorAll("ul"); // NodeList de todos los elementos que coinciden con el selector CSS
    console.log(listaUls);
    console.log(listaUls[0]);

    listaUls = document.querySelectorAll('[name="nLista"]'); // NodeList de todos los elementos que coinciden con el selector CSS
    console.log(listaUls);
    console.log(listaUls[0]);
    
}