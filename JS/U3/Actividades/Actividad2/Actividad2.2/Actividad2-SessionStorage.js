"use strict"
{
    let h1 = document.createElement("h1");
    h1.textContent = "Contador LocalStorage y SessionStorage";
    document.body.appendChild(h1);

    let contador = sessionStorage.getItem("contador");
    if (contador === null) {
        contador = 1;
    } else {
        contador = parseInt(contador) + 1;
    }
    sessionStorage.setItem("contador", contador);

    let h3 = document.createElement("h3");
    h3.textContent = contador;
    document.body.appendChild(h3);

    let p = document.createElement("p");
    document.body.appendChild(p);

    let boton = document.createElement("button");
    boton.textContent = "Eliminar contador";
    document.body.appendChild(boton);

    boton.addEventListener("click", () => {
        sessionStorage.removeItem("contador");
        p.textContent = "Contador eliminado. Refresca la página.";
    });
}