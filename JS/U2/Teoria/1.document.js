"use strict"
{
    console.log(window.document); // Objeto document del navegador
    console.log(document); // Objeto document del navegador

    console.log(document.documentElement); // Elemento <html>

    console.log(document.head); // Elemento <head>
    console.log(document.body); // Elemento <body>
    console.log(document.doctype); // Tipo de documento 
    console.log(document.characterSet); // Codificación del documento
    console.log(document.title); // Título del documento

    console.log(document.links); // Colección de enlaces
    console.log(document.images); // Colección de imágenes
    console.log(document.forms);  // Colección de formularios
    console.log(document.styleSheets); // Colección de hojas de estilo
    console.log(document.scripts); // Lista de scripts en la página

    let a = document.links;
    for (let i = 0; i < a.length; i++) {
        console.log(a[i].href);
    } // Muestra todos los enlaces de la página

    /**
     * - Clase HTMLElement: contiene objetos que son elementos de html: body, párrafo, div, ...
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement
     * 
     * - HTMLCollection: es una interfaz que se implementa mediante una clase que es un "array" que contiene elementos html en orden de aparición.
     * En resumen: un casi un array de HTMLElements ,pero no tienen: forEach, map ni reduce.
     * Un HTMLCollection se actualiza de forma automática en cuanto se crea o se elimina un nuevo elemento html en la página.
     * 
     * - Clase Node: es algo más genérico que Element ya que también puede ser un texto o un comentario.
     * https://developer.mozilla.org/en-US/docs/Web/API/Node
     * - NodeList: es casi un array de Node. Trae forEach.
     * 
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection
     * https://lasfi.to/blog/diferencias-entre-node-y-element/
     * 
     */

    

}