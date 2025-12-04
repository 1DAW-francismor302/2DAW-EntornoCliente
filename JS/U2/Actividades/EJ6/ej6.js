"use strict"
{
    let btn1 = document.createElement("button");
    btn1.textContent = "Comenzar saludos";
    document.body.appendChild(btn1);

    let btn2 = document.createElement("button");
    btn2.textContent = "Parar saludos";
    document.body.appendChild(btn2);

    let saludos = null;

    btn1.addEventListener("click", () => {
        if (saludos === null) {
            console.log("Empezando a saludar");
            saludos = setInterval(() => alert("Hola"),5000);
        }
    });

    btn2.addEventListener("click", () => {
        if (saludos !== null) {
            console.log("Dejando de saludar");
            clearInterval(saludos);
            saludos = null;
        }
    })
}