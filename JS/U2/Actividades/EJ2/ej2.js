"use strict"
{

    document.body.innerHTML = "<h2>Detector Números Primos</h2>";

    let btn1 = document.createElement("button");
    btn1.textContent = "Calcular números primos";
    document.body.appendChild(btn1);

    let btn2 = document.createElement("button");
    btn2.textContent = "Restablecer celdas";
    document.body.appendChild(btn2);

    let tabla = document.createElement("table");

    let tbody = document.createElement("tbody");

    let contador = 1;

    for (let i = 0; i < 10; i++) {
        let fila = document.createElement("tr");
        for (let j = 0; j < 10; j++) {
            let celda = document.createElement("td");
            celda.textContent = contador;
            fila.appendChild(celda);
            contador++;
        }
        tbody.appendChild(fila);
    }

    tabla.setAttribute("style", "border: 4px red solid");
    tabla.appendChild(tbody);
    document.body.appendChild(tabla);

    function calcularPrimo(numero) {
        if (numero <= 1) {
            return false;
        }
        for (let i = 2; i < numero; i++) {
            if (numero % i === 0) {
                return false;
            }
        }
        return true;
    }

    btn1.addEventListener("click", () => {
        let celdas = document.getElementsByTagName("td");
        for (let i = 0; i < celdas.length; i++) {
            if (calcularPrimo(celdas[i].textContent)) {
                celdas[i].classList.add("primos");
            }
        }
    });

    btn2.addEventListener("click", () => {
        let celdas = document.getElementsByTagName("td");
        for (let i = 0; i < celdas.length; i++) {
            celdas[i].classList.remove("primos");
        }
    })
}