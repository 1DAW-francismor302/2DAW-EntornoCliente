"use strict"
{
    let h1 = document.createElement("h1");
    h1.textContent = "Ejercicio 11: Email";
    document.body.appendChild(h1);

    let listaServidores=["terra.es","google.com","marca.es","yahoo.es"];

    let form = document.createElement("form");
    form.setAttribute("id", "emailForm");
    form.setAttribute("method", "post");
    form.setAttribute("action", "https://formsubmit.co/fmormun@g.educaand.es");
    document.body.appendChild(form);

    let labelEmail = document.createElement("label");
    labelEmail.textContent = "Email: ";
    form.appendChild(labelEmail);

    let inputEmail = document.createElement("input");
    inputEmail.setAttribute("type", "text");
    inputEmail.setAttribute("name", "email");
    inputEmail.setAttribute("placeholder", "Introduce tu email");
    form.appendChild(inputEmail);

    let br = document.createElement("br");
    form.appendChild(br);

    let btnSubmit = document.createElement("button");
    btnSubmit.setAttribute("type", "submit");
    btnSubmit.textContent = "Enviar";
    form.appendChild(btnSubmit);

    function validarEmail(email) {
        let regExp = new RegExp(/[0-9a-zA-Z]+@[0-9a-zA-Z]+\.[a-zA-Z]{2,}/);
        return regExp.test(email);
    }

    form.addEventListener("submit", function (e){
        if (!validarEmail(inputEmail.value)) {
            e.preventDefault();
            alert("Email inválido. Por favor, introduce un email correcto.");
        }else if (!listaServidores.includes(inputEmail.value.split("@")[1])) {
            e.preventDefault();
            alert("Servidor de email no permitido");
        }
    });
}