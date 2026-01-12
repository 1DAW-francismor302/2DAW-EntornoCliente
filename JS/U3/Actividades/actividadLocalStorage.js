"use strict"
{

    /**
        ** Usando la tecnología de localStorage, almacena en una variable llamada username el nombre del usuario y, al cargar la página, verificar:
        * - si la variable no existe:
        *    - Indicarle al usuario que no está identificado.
        *    - Mostrarle un prompt para que introduzca su nombre de usuario.
        *    - Controlar si deja el prompt en blanco y hace click en cancelar.
        *    - guardar el valor de la variable username.
        * - si la variable ya existe:
        *    - Saludar al usuario escribiendo: ¡Bienvenido de nuevo, username!
        * Añadir en la parte superior un botón para eliminar la variable username del localStorage
        * 
        * NOTA: excepto el prompt para pedirle los datos al usuario, todo debe escribirse en el DOM
        *  usando los elementos HTML que creas necesarios en Javascript
        * NOTA2: probar el funcionamiento recargando la página tras haber introducido un username y tras borrarlo tanto con el botón como desde el navegador.
    */

    // LOCALSTORAGE


    document.addEventListener("DOMContentLoaded", () => {

        let container = document.createElement("div");
        document.body.append(container);

        let mensaje = document.createElement("p");
        container.append(mensaje);

        let btnCerrarSesion = document.createElement("button");
        btnCerrarSesion.textContent = "Cerrar sesión";
        container.append(btnCerrarSesion);

        btnCerrarSesion.addEventListener("click", () => {
            localStorage.removeItem("username");
            mensaje.textContent = "Has cerrado sesión. Recarga la página.";
        });

        let username = localStorage.getItem("username");

        if (!username) {
            mensaje.textContent = "No estás identificado.";

            let inputNombre = prompt("Introduce tu nombre de usuario:");

            if (inputNombre === null || !validarNombre(inputNombre)) {
                mensaje.textContent += " No se ha introducido ningún nombre válido.";
            } else {
                localStorage.setItem("username", inputNombre);
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