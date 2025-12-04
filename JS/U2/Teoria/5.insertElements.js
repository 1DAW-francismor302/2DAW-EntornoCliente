"use strict"
{
    /**
     * PROPIEDADES PARA REEMPLAZAR O CREAR TEXTOS O ELEMENTOS PEQUEÑOS
     * textContent : propiedad que permite insertar texto en un elemento HTML (texto sin formato)
     * innerHTML : propiedad que permite insertar texto o elementos HTML dentro de un elemento HTML (texto con formato)
     * outerHTML : propiedad que permite reemplazar un elemento HTML por otro elemento HTML (texto con formato + etiqueta HTML)
     */

    let myDiv1 = document.getElementById("idDiv1");
    console.log(myDiv1);
    myDiv1.style.setProperty("background-color", "lightblue");
    myDiv1.textContent = "Contenido del DIV sin formato";
    myDiv1.textContent += " hola caracola"; // añade mas texto


    let myDiv2 = document.getElementsByClassName("cDiv2")[0];
    console.log(myDiv2);
    myDiv2.textContent = "Hola a todas y a todos"; // elimina todo el contenido anterior y lo reemplaza por este texto
    myDiv2.textContent = "Hola a <strong>toda</strong> y a todos";
    myDiv2.innerHTML = "Hola a <strong>toda</strong> y a todos"; // interpreta las etiquetas HTML
    myDiv2.innerHTML += ", buenas <i>tardes</i>"; // añade mas contenido HTML

    console.log(myDiv2.outerHTML); // muestra el elemento HTML completo

    /**
     * append --> añadir hijo (Node o String) no devuelve nada
     * appendChild --> añadir hijo (Node) te devuelve el nodo añadido
     */

    const img = document.createElement("img");
    img.src = "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg";
    img.style.setProperty("width", "40px");
    img.alt ="logo JS";
    let i = document.body.appendChild(img);
    console.log(i);

    const myDiv3 = document.createElement("div"); // Me invento myDiv3 para luego colocar miDiv4 alrededor de myDiv3 (más abajo)
    myDiv3.textContent = "Esto es mi Div3 insertado con javascript";
    myDiv3.setAttribute("id", "idDiv3");
    console.log(myDiv3);

    document.body.append(myDiv3); // append puede añadir nodos o strings

    /**
     *      insertAdjacent: 3 versiones:
     * insertAdjacentElement (insertPosition, HTMLElement) : para insertar un Element
     * insertAdjacentHTML(insertPosition, string) : para insertar código HTML (similar a innerHTML)
     * insertAdjacentText (inserPosition, string) : para insertar texto (similar a textContent)
     * 
     * llevan 2 parámetros:
     * parámetro1: posición donde va insertado el contenido.
     *  beforebegin: el contenido se inserta ANTES de la etiqueta HTML de apertura
     *  afterbegin: el contenido se inserta DENTRO de la etiqueta HTML, antes de su primer hijo
     *  beforeend: el contenido se inserta DENTRO de la etiqueta HTML, después de su último hijo (=appendChild())
     *  afterend: el contenido se inserta DESPUÉS de la etiqueta HTML de cierre
     * parámetro2: el contenido que se inserta
     */

    /**
     * <!-- beforebegin -->
     * <p1>
     *   <!-- afterbegin -->
     *   Texto del párrafo
     *   <!-- beforeend -->
     * </p1>
     * <!-- afterend -->
     */

    let myDiv4 = document.createElement("div");
    myDiv4.setAttribute("id", "idDiv4");
    myDiv4.textContent = "Contenido del Div4";

    myDiv3.setAttribute("style", "background-color: orange;");
    myDiv3.style.setProperty("background-color", "orange");
    myDiv3.style.backgroundColor = "orange";

    // myDiv3.insertAdjacentElement("beforebegin", myDiv4);
    // myDiv3.insertAdjacentElement("afterbegin", myDiv4);
    // myDiv3.insertAdjacentElement("beforeend", myDiv4);
    // myDiv3.insertAdjacentElement("afterend", myDiv4);
    myDiv3.appendChild(myDiv4); // añade myDiv4 al final de myDiv3


}