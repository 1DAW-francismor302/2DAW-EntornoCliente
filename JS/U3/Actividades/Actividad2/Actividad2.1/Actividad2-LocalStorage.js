"use strict"
{
    let h1 = document.createElement("h1");
    h1.textContent = "Contador LocalStorage y SessionStorage";
    document.body.appendChild(h1);

    let contador = localStorage.getItem("contador");
    if (contador === null) {
        contador = 1;
    } else {
        contador = parseInt(contador) + 1;
    }
    localStorage.setItem("contador", contador);

    let h3 = document.createElement("h3");
    h3.textContent = contador;
    document.body.appendChild(h3);

    let p = document.createElement("p");
    document.body.appendChild(p);

    let boton = document.createElement("button");
    boton.textContent = "Eliminar contador";
    document.body.appendChild(boton);

    boton.addEventListener("click", () => {
        localStorage.removeItem("contador");
        p.textContent = "Contador eliminado. Refresca la página.";
    });
}