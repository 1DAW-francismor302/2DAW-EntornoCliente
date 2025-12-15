"use strict"
{
    let h1 = document.createElement("h1");
    h1.textContent = "Ejercicio 12: Anagrama";
    document.body.appendChild(h1);

    let formulario = document.createElement("form");
    formulario.setAttribute("id", "idFormulario");
    formulario.setAttribute("method", "post");
    formulario.setAttribute("action", "https://formsubmit.co/fmormun@g.educaand.es");
    document.body.appendChild(formulario);

    let label1 = document.createElement("label");
    label1.textContent = "Texto 1: ";
    formulario.appendChild(label1);

    let input1 = document.createElement("input");
    input1.setAttribute("type", "text");
    input1.setAttribute("name", "texto1");
    input1.setAttribute("placeholder", "Introduce el texto 1");
    formulario.appendChild(input1);

    let label2 = document.createElement("label");
    label2.textContent = "Texto 2: ";
    formulario.appendChild(label2);

    let input2 = document.createElement("input");
    input2.setAttribute("type", "text");
    input2.setAttribute("name", "texto2");
    input2.setAttribute("placeholder", "Introduce el texto 2");
    formulario.appendChild(input2);

    let br = document.createElement("br");
    formulario.appendChild(br);

    let btnSubmit = document.createElement("button");
    btnSubmit.setAttribute("type", "submit");
    btnSubmit.textContent = "Enviar";
    formulario.appendChild(btnSubmit);

    function sonAnagramas(texto1, texto2) {
        if (texto1 === texto2) {
            return false;
        }

        texto1 = texto1.toLowerCase().replace(/\s+/g, '');
        texto2 = texto2.toLowerCase().replace(/\s+/g, '');

        if (texto1.length !== texto2.length) {
            return false;
        }

        const arr1 = texto1.split('').sort().join('');
        const arr2 = texto2.split('').sort().join('');

        if (arr1 === arr2) {
            return true;
        } else {
            return false;
        }
    }

    formulario.addEventListener("submit", function (e){
        if (!sonAnagramas(input1.value, input2.value)) {
            e.preventDefault();
            alert("Los textos no son anagramas. Por favor, introduce dos textos que sean anagramas.");
        }
    });
}