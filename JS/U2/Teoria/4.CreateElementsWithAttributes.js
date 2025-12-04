"use strict"
{
    let myDiv = document.createElement("div");
    myDiv.id = "id1";
    myDiv.style = "color: red";
    myDiv.className = "cDiv1";
    myDiv.className = "cDiv2"; // sobreescribe la clase anterior
    myDiv.classList.add("cDiv3"); // añade una clase mas
    console.log(myDiv);

    let newP = document.createElement("p");

    // Atributos de un elemento HTML
    /**
     * setAttribute (String attr, valor) : añade o cambiar el valor del atributo
     * boolean hasAttribute (String attr) : Indica si el Element tiene el atributo sttr
     * boolean hasAttributes () : indica si el Element tiene atributos HTML o no
     * Array getAttributeNames () : devuelve un array de String con los atributos del Element
     * String getAttribute (String attr)
     * removeAttribute (String attr)
     * 
     * Node getAttributeNode (String attr) : igual que getAttribute pero devuelve el Node
     * Node removeAttributeNode (String attr) : igual que removeAttribute pero devuelve el Node borrado
     * Node setAttributeNode (String attr, valor) : igual que setAttribute pero devuelve el Node al que le acabas de insertar el atributo
     * 
     */
    

    newP.setAttribute("name", "nDiv1");
    newP.setAttribute("id", "idP1");
    newP.setAttribute("class", "cP1");
    console.log(newP);
    console.log("Tiene atributo 'name'? ", newP.hasAttribute("name")); // true
    newP.setAttribute("style", "color: orange");
    console.log(newP.getAttributeNames());
    newP.removeAttribute("style");
    console.log(newP.getAttributeNames());

    let attr1 = newP.getAttribute("id");
    let attr2 = newP.getAttribute("id");
    console.log(attr1);
    console.log(attr2);

    newP.appendChild(document.createTextNode("text of p"));
    myDiv.appendChild(newP);

    console.log(newP.isConnected); // true
    console.log(myDiv.isConnected); // false

    let myA = document.querySelector("a.enlace");
    console.log(myA.getAttribute("data-id"));
    myA.setAttribute("data-description", "DOM");

    // STYLE

    console.log(myA.style); // devuelve el objeto CSSStyleDeclaration
    console.log(myA.style.backgroundColor); // brown

    console.log(window.getComputedStyle(myA)); // devuelve todos los estilos aplicados al elemento

    myA.style.backgroundColor = "orange"; // cambia el color de fondo
    myA.style.setProperty("background-color", "green"); // cambia el color de fondo

    myA.style.textDecoration = "line-through";
    myA.style.setProperty("text-decoration", "none");

    console.log(myA.dataset); // DOMStringMap { id: '1', description: 'DOM'
    console.log(myA.dataset.id); // 1
    console.log(myA.dataset.description); // DOM

    let myH3 = document.querySelector(".cHache3");
    console.log(myH3); // <h3 class="cHache3 cImportante cContenido ">Mi H3</h3>
    myH3.classList.add("cUno"); // añade la clase cUno
    myH3.classList.add("cDos"); // añade la clase cDos
    console.log(myH3.classList); 
    myH3.classList.remove("cImportante"); // elimina la clase cImportante
    console.log(myH3.classList);
    myH3.classList.toggle("cInfo"); // añade la clase cInfo
    console.log(myH3.classList);
    myH3.classList.toggle("cInfo"); // elimina la clase cInfo
    console.log(myH3.classList);
    console.log(myH3.classList.item(0)); // devuelve la clase en la posicion 0
    console.log(myH3.classList.contains("cImportante")); // false
    myH3.classList.replace("cUno", "cTres"); // reemplaza la clase cUno por cTres
    console.log(myH3.classList);

}