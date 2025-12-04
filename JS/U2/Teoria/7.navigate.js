"use strict"
{
    /**
     * PARA NAVEGAR POR ELEMENTOS
     * children : devuelve un array de HTMLCollection con los elementos hijo del elemento en cuestión
     * parentElement : devuelve el elemento padre o null si no tiene 
     * firstElementChild = children[0] = primer hijo
     * lastElementChild = children[ultimo]  = children[children.length-1] = último hijo
     * previousElementSibling : devuelve el elemento hermano previo (null si no tiene)
     * nextElementSibling : devuelve el siguiente elemento hermano (null si no tiene)
     */

    console.log(document.body.children); // HTMLCollection con los elementos hijos del body

    console.log(document.body.children.length); // <html> (elemento padre del body)
    for (let element of document.body.children) {
        console.log(element); // cada uno de los elementos hijos del body
    }

    console.log(document.body.parentElement); // <html> (elemento padre del body)

    let listaAviones = document.querySelector("#idAviones");
    let padreAviones = listaAviones.parentElement;
    console.log(padreAviones); // <div> que contiene la lista de aviones

    console.log(document.body.firstElementChild); // primer hijo del body (<h1>)
    console.log(document.body.firstElementChild.textContent); // texto del primer hijo del body
    console.log(document.body.firstElementChild.firstChild); // nodo de texto del primer hijo del body

    console.log(document.body.lastElementChild); // último hijo del body (<div> que contiene el formulario)
    console.log(document.body.children[document.body.children.length-1]); // último hijo del body (<div> que contiene el formulario)

    /**
     * PARA NAVEGAR POR LOS NODOS
     * childNodes : devuelve un array de NodeList con los nodos hijos del elemento en cuestión
     * parentElement : devuelve el nodo padre o null si no tiene 
     * firstChild : devuelve el primer nodo hijo
     * lastChild : devuelve el último nodo hijo
     * previousSibling : devuelve el anterior nodo hermano
     * nextSibling : devuelve el siguiente nodo hermano
     */

    console.log(document.body.childNodes); // NodeList con los nodos hijos del body
    console.log(document.body.childNodes.length); // número de nodos hijos del body
    document.body.childNodes.forEach(element => {
        console.log(element); // cada uno de los nodos hijos del body
    });

    console.log(document.body.parentElement); // <html> (elemento padre del body)

    console.log(document.body.childNodes[0]); // primer nodo hijo del body (nodo de texto con el salto de línea)
    console.log(document.body.lastChild); // último nodo hijo del body (nodo de texto con el salto de línea)

    console.log(document.body.childNodes[document.body.childNodes.length-1]); // último nodo hijo del body (nodo de texto con el salto de línea)
    console.log(document.body.childNodes[5].firstChild); // nodo de texto del último nodo hijo del body (nodo de texto con el salto de línea)
    console.log(document.body.childNodes[5].lastChild); // nodo de texto del último nodo hijo del body (nodo de texto con el salto de línea)

    let div1 = document.querySelector("#idApp");
    let p = div1.querySelector("p");
    console.log(p.previousSibling); // nodo de texto (salto de línea)
    console.log(p.nextSibling); // nodo de texto (salto de línea)
    console.log(p.nextElementSibling); // <button> (siguiente elemento hermano)
}