"use strict"
{
    let h1 = document.createElement("h1");
    h1.textContent = "Ejercicio 9: Tirar bola de papel";
    document.body.appendChild(h1);

    let div = document.createElement("div");
    div.style.display = "flex";
    div.style.justifyContent = "space-around";
    div.style.alignItems = "flex-end";
    document.body.appendChild(div);

    let papeleraVacia = document.createElement("img");
    papeleraVacia.setAttribute("src", "./imagenes/papelera_vacia.jpg");
    papeleraVacia.setAttribute("alt", "Papelera vacía");
    papeleraVacia.style.height = "300px";
    papeleraVacia.style.width = "200px";
    div.appendChild(papeleraVacia);

    let bolaPapel = document.createElement("img");
    bolaPapel.setAttribute("src", "./imagenes/bola_papel.jpg");
    bolaPapel.setAttribute("alt", "Papelera vacía");
    bolaPapel.style.height = "200px";
    bolaPapel.style.width = "200px";
    bolaPapel.setAttribute("draggable", "true");
    div.appendChild(bolaPapel);

    papeleraVacia.addEventListener ("dragover", (e) => {
        e.preventDefault();
    });

    papeleraVacia.addEventListener ("drop", (e) => {
        e.preventDefault();
        papeleraVacia.setAttribute("src", "./imagenes/papelera_llena.jpg");
        papeleraVacia.style.height = "300px";
        papeleraVacia.style.width = "400px";
        bolaPapel.style.display = "none";
    });
}