"use strict"
{
    let h1 = document.createElement("h1");
    h1.textContent = "Ejercicio 8: Color Random";
    document.body.appendChild(h1);

    document.body.addEventListener("dblclick", () => {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });
}