"use strict"
{
    document.body.innerHTML = "<h2>Marcar y Desmarcar</h2>";

    let btn1 = document.createElement("button");
    btn1.textContent = "Marcar todos";
    document.body.appendChild(btn1);

    let btn2 = document.createElement("button");
    btn2.textContent = "Desmarcar todos";
    document.body.appendChild(btn2);

    let btn3 = document.createElement("button");
    btn3.textContent = "Ampliar tamaño pares";
    document.body.appendChild(btn3);

    let btn4 = document.createElement("button");
    btn4.textContent = "Restablecer tamaño";
    document.body.appendChild(btn4);

    let contenedor = document.createElement("div");

    for (let i = 0; i < 100; i++) {
        let num = Math.floor(Math.random() * (200 - 100) + 100);
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = num;

        let label = document.createElement("label");
        label.textContent = i;
        label.htmlFor = checkbox.id;

        contenedor.appendChild(checkbox);
        contenedor.appendChild(label);
        contenedor.appendChild(document.createElement("br"));
    }

    document.body.appendChild(contenedor);

    let checkbox = document.getElementsByTagName("input");

    btn1.addEventListener("click", () => {
        for (let checks of checkbox) {
            if (checks.type === "checkbox") {
                checks.checked = true;
            }
        }
    })

    btn2.addEventListener("click", () => {
        for (let checks of checkbox) {
            if (checks.type === "checkbox") {
                checks.checked = false;
            }
        }
    })

    btn3.addEventListener("click", () => {
        for (let checks of checkbox) {
            if (checks.type === "checkbox" && checks.value % 2 === 0) {
                checks.style.width = "100px";
                checks.style.height = "100px";
            }
        }
    })

    btn4.addEventListener("click", () => {
        for (let checks of checkbox) {
            if (checks.type === "checkbox") {
                checks.style.width = "0px";
                checks.style.height = "0px";
            }
        }
    })


    for (let checks of checkbox)  {

        checks.addEventListener("change", () => {
            if (checks.type === "checkbox") {
                if (checks.checked === true) {
                    console.log("check" + checks.value + " marcado");
                }else{
                    console.log("check" + checks.value + " desmarcado");
                }
            }
        })
    }
}

