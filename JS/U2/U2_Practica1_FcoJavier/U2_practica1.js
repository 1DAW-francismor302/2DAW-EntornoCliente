"use strict"
{
    let n = document.querySelector(".inputNBotones");
    let btnCrear = document.querySelector(".crearBotones");
    let btnReiniciar = document.querySelector(".reiniciar");

    

    function comprobarNumero(n) {
        let numero = parseInt(n);
        if (numero > 0) {
            return true;
        }else {
            return false;
        }
    }

    function colorAleatorio() {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    btnCrear.addEventListener("click", () => {
        if (comprobarNumero(n.value) === true) {
            let numero = parseInt(n.value);
            for (let i = 0; i < numero; i++) {
                let btnACrear = document.createElement("button");
                btnACrear.classList.add("botonCreado");
                btnACrear.style.backgroundColor = colorAleatorio();
                btnACrear.textContent = btnACrear.style.backgroundColor;
                btnReiniciar.insertAdjacentElement("beforebegin", btnACrear);

                btnACrear.addEventListener("click", () => {
                    document.body.style.backgroundColor = btnACrear.style.backgroundColor;
                });
            }
        }else {
            alert("El número no puede ser menor o igual que 0.")
        }
    });

    btnReiniciar.addEventListener("click", () => {
        let botonesCreados = document.querySelectorAll(".botonCreado");
        for (let boton of botonesCreados) {
            boton.remove();
        }
        document.body.style.backgroundColor = "white";
        n.value = "";
    })
}