"use strict"
{
    document.body.innerHTML = "<h2>Generador de números aleatorios</h2>";
    
    let btnNuevoNumero = document.createElement("button");
    btnNuevoNumero.textContent = "Nuevo número";
    document.body.appendChild(btnNuevoNumero);

    let btnBorrarNumero = document.createElement("button");
    btnBorrarNumero.textContent = "Borrar número";
    document.body.appendChild(btnBorrarNumero);

    let ul = document.createElement("ul");
    document.body.appendChild(ul);

    btnNuevoNumero.addEventListener("click", () => {
        let li = document.createElement("li");
        let numeroAleatorio = Math.floor(Math.random() * (100 - 1) + 1);
        li.textContent = numeroAleatorio;
        ul.appendChild(li);
    });

    btnBorrarNumero.addEventListener("click", () => {
        let ultimoElemento = ul.lastElementChild;
        if (ultimoElemento) {
            ul.removeChild(ultimoElemento);
        }
    });
}