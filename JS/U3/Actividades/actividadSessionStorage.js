"use strict"
{
    // SESSIONSTORAGE

    document.addEventListener("DOMContentLoaded", () => {

        let container = document.createElement("div");
        document.body.append(container);

        let mensaje = document.createElement("p");
        container.append(mensaje);

        let btnCerrarSesion = document.createElement("button");
        btnCerrarSesion.textContent = "Cerrar sesión";
        container.append(btnCerrarSesion);

        btnCerrarSesion.addEventListener("click", () => {
            sessionStorage.removeItem("username");
            mensaje.textContent = "Has cerrado sesión. Recarga la página.";
        });

        let username = sessionStorage.getItem("username");

        if (!username) {
            mensaje.textContent = "No estás identificado.";

            let inputNombre = prompt("Introduce tu nombre de usuario:");

            if (inputNombre === null || !validarNombre(inputNombre)) {
                mensaje.textContent += " No se ha introducido ningún nombre válido.";
            } else {
                sessionStorage.setItem("username", inputNombre);
                mensaje.textContent = `¡Bienvenido, ${inputNombre}!`;
            }

        } else {
            mensaje.textContent = `¡Bienvenido de nuevo, ${username}!`;
        }
    });

    function validarNombre(nombre) {
        for (let i = 0; i < nombre.length; i++) {
            if (nombre[i] !== " ") {
                return true;
            }
        }
        return false;
    }
}