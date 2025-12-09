"use strict"
{
    let myForm1 = document.getElementById("idForm1");
    console.log(myForm1);

    console.log(myForm1.nTexto.value);
    console.log(myForm1.nUrl.value);

    myForm1.nTexto.value = "Today is raining";

    let inputText1 = document.getElementById("idTexto1");
    inputText1.addEventListener("input", (e) => {
        console.log("input");
        console.log(e.data);
        console.log(e.target.value);
        console.log(inputText1.value);
    });

    inputText1.addEventListener("change", (e) => {
        console.log("change: " + e.target.value);
    });

    let textArea1 = document.getElementById("idTextArea1");
    console.log(textArea1.value);
    textArea1.addEventListener("input", (e) => {
        console.log(e.data);
        console.log(e.target.value);
    });

    textArea1.addEventListener("change", (e) => {
        console.log("change: " + e.target.value);
    });

    let rButton1 = document.getElementsByName("nrButton1");
    console.log(rButton1);
    rButton1.forEach(rb => {
        console.log(rb);
        console.log(rb.value);
        console.log(rb.previousElementSibling.textContent);
        if (rb.checked) {
            console.log("La opción marcada es: " + rb.value);
        }
    });

    console.log(`Tiene ${rButton1.length} opciones`);

    for (let r of rButton1) {
        r.addEventListener("change", (e) => {
            if (r.checked) {
                console.log("Se ha marcado: " + r.value);
            }
        });
    }

    // Checkbox
    
    let myChecks = document.querySelectorAll("[name='nCheck1']");
    console.log(myChecks);
    myChecks.forEach(c => {
        console.log(c);
        console.log(c.value);
        console.log(c.previousElementSibling.textContent);
        if (c.checked) {
            console.log("La opción marcada es: " + c.value);
        }
    });

    for (let c of myChecks) {
        c.addEventListener("change", (e) => {
            if (c.checked) {
                console.log("Me como un: " + e.target.value);
            }else {
                console.log("No me como un: " + e.target.value);
            }
        })
    }

    let seleccion = document.querySelector("#idLenguaje");
    console.log(seleccion);
    for (let o of seleccion) {
        console.log(o.value);
        console.log(o.textContent);
        console.log(seleccion.selectedIndex);
    }

    console.log(seleccion.options[seleccion.selectedIndex].value);

    seleccion.addEventListener("change", (e) => {
        console.log(`\nEl índice seleccionado es: ${seleccion.selectedIndex}`);
        console.log(`El valor del elemento seleccionado es: ${seleccion.options[seleccion.selectedIndex].value}`);
        console.log(`El texto del elemento seleccionado es: ${seleccion.options[seleccion.selectedIndex].text}`);
    })

    let dataList = document.querySelector("#idFrutas");

    for (let o of Array.from(dataList.options)) {
        console.log(o.value);
        console.log(o.text);
        console.log(o.textContent);
    }

    let cajaTexto = document.querySelector("#idFrutas");
    cajaTexto.addEventListener("change", function (e) {
        console.log(cajaTexto.value);
        console.log(e);
        console.log(e.target.value);
    })
}