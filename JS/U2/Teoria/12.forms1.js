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
}