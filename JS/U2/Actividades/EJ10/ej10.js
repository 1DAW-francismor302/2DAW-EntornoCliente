"use strict"
{
    let h1 = document.createElement("h1");
    h1.textContent = "Ejercicio 10: DNI";
    document.body.appendChild(h1);

    let formulario = document.createElement("form");
    formulario.setAttribute("id", "idFormulario");
    formulario.setAttribute("method", "post");
    formulario.setAttribute("action", "https://formsubmit.co/fmormun@g.educaand.es");
    document.body.appendChild(formulario);

    let labelDni = document.createElement("label");
    labelDni.textContent = "DNI: ";
    formulario.appendChild(labelDni);

    let inputDni = document.createElement("input");
    inputDni.setAttribute("type", "text");
    inputDni.setAttribute("name", "dni");
    inputDni.setAttribute("placeholder", "DNI");
    formulario.appendChild(inputDni);

    let br = document.createElement("br");
    formulario.appendChild(br);

    let btnSubmit = document.createElement("button");
    btnSubmit.setAttribute("type", "submit");
    btnSubmit.textContent = "Enviar";
    formulario.appendChild(btnSubmit);

    function validarDNI(dni) {
        if (dni.length !== 9) {
            return false;
        }else {
            dni = dni.toUpperCase();
            let numero = parseInt(dni.substring(0, 8));
            let letra = dni.charAt(8).toUpperCase();
            const letrasDNI = "TRWAGMYFPDXBNJZSQVHLCKE";
            let letraCorrecta = letrasDNI.charAt(numero % 23);
            if (letraCorrecta === letra) {
                return true;
            } else {
                return false;
            }
        }
    }

    formulario.addEventListener("submit", function (e){
        if (!validarDNI(inputDni.value)) {
            e.preventDefault();
            alert("DNI inválido. Por favor, introduce un DNI correcto.");
        }else {
            alert("DNI válido. Formulario enviándose.");
        }
    });

    inputDni.addEventListener("blur", function (e){
        if (e.target === inputDni) {
            if (!validarDNI(inputDni.value)) {
                e.preventDefault();
                alert("DNI inválido. Por favor, introduce un DNI correcto.");
            }else {
                alert("DNI válido. Formulario enviándose.");
            }
        }
    });
}