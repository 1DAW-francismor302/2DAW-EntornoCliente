"use strict" 
{
    let myForm = document.querySelector("#idForm1");
    myForm.addEventListener("submit", function (e) {
        let passwd = document.querySelector("#idPasswd");
        let cajaTexto = document.querySelector("#idText1");
        let email = document.querySelector("#idEmail1");

        // TODO: validar que los 3 campos cumplen las restricciones, y enviar

        if (!(cajaTexto.value.length === 4 ) || !validarTexto(cajaTexto.value)) {
            e.preventDefault();
            console.log("error");
            if (!(cajaTexto.value.length === 4)) {
                mostrarMensaje("La longitud debe ser 4", cajaTexto);
            }
            if (!validarTexto(cajaTexto.value)) {
                mostrarMensaje("Debe empezar por la letra a", cajaTexto);
            }
        }

        function validarTexto (t) {
            let regExp = /^a/i;
            return regExp.test(t);
        }

        function mostrarMensaje(m, elemento) {
            let p = document.createElement("p");
            p.textContent = m;
            p.setAttribute("class", "error");
            elemento.insertAdjacentElement("afterend", p);
            setTimeout(function() {
                p.remove();
            }, 3000);
        }
    })
}