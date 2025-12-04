"use strict"

{
    let myBtn5 = document.querySelector("#idBoton5");
    let myP1 = document.querySelector("#idP1");
    let myP2 = document.querySelector("#idP2");

    // myBtn5.addEventListener('click', function(evento) {
    //     alert('Greet 5');
    //     console.log(evento); // Objeto evento
    //     console.log(evento.type); // Tipo de evento          
    //     console.log(evento.target); // Elemento que disparó el evento
    // });

    // myBtn5.addEventListener("mousemove", (evento) => {
    //     console.log(evento.button); // Botón del ratón que se pulsó
    //     console.log(evento.x + " - " + evento.y); // Coordenadas del ratón
    //     console.log(evento.clientX + " - " + evento.clientY); // Coordenadas del ratón en la ventana
    //     console.log(evento.offsetX + " - " + evento.offsetY); // Coordenadas del ratón en el elemento

    //     myP1.innerHTML = "X= " + evento.x + " ; Y= " + evento.y;
    //     myP1.innerHTML += " <br> X= " + evento.offsetX + " ; Y= " + evento.offsetY;
    // });

    // // https://devdocs.io/dom/mouseevent eventos del ratón

    // document.addEventListener("mousemove", function(evento) {
    //     myP2.innerHTML = "X= " + evento.x + " ; Y= " + evento.y;
    //     myP2.innerHTML += " <br> X= " + evento.screenX + " ; Y= " + evento.screenY;
    // });

    function showMessage(evento) {
        console.log(`The event type is: ${evento.type}`);
        if (evento.type === "keydown") {
            console.log("key code: " + evento.code);
            console.log("key pressed: " + evento.key);
        }else if (evento.type === "click") {
            console.log(evento.detail); // Número de clicks
            console.log("¿Estaba pulsando la tecla CTRL? " + evento.ctrlKey);
            console.log("¿Estaba pulsando la tecla ALT? " + evento.altKey);
            console.log("¿Estaba pulsando la tecla SHIFT? " + evento.shiftKey);
            console.log(evento.target); // Elemento que disparó el evento
            console.log(evento.target.id); // Id del elemento que disparó el evento
            console.log(evento.target.textContent); // Texto del elemento que disparó el evento
        }else if (evento.type === "dblclick") {
            console.log("Doble click detectado");
        }else if (evento.type === "contextmenu") {
            console.log("contextmenu");
            evento.preventDefault(); // Evita que se abra el menú contextual
        }
    }

    myBtn5.addEventListener("keydown", showMessage);
    myBtn5.addEventListener("click", showMessage);
    myBtn5.addEventListener("dblclick", showMessage);
    myBtn5.addEventListener("contextmenu", showMessage);

    let myBtn6 = document.createElement("button");
    myBtn6.textContent = "Greet 6";
    document.body.appendChild(myBtn6);

    myBtn6.addEventListener("dblclick", function (evento) {
        console.clear();
        this.textContent = "Button 6";
        // evento.target.textContent = "Button 6";
        this.setAtribute("id", "idBtn6");
        // evento.target.setAtribute("id", "idBtn6");
        console.log(this);
    });

    /**
     * elemento.addEventListener ("eventoQueCapturo", function(), {capture: true, once: true, passive: true});
     */

    let myBnt7 = document.createElement("button");
    myBnt7.textContent = "Greet 7";
    document.body.appendChild(myBnt7);
    myBnt7.addEventListener("click", function (evento) {
        alert("Click en el botón 7");
    }, { once: true }); // El evento se ejecuta solo una vez

    let myBtn8 = document.createElement("button");
    myBtn8.textContent = "Greet 8";
    document.body.appendChild(myBtn8);
    myBtn8.addEventListener("click", function (evento) {
        console.log("Click 1 en el botón 8");
    });
    myBtn8.addEventListener("click", function (evento) {
        console.log("Click 2 en el botón 8");
    });
    myBtn8.addEventListener("click", function (evento) {
        console.log("Click 3 en el botón 8");
    }, { capture: true }); // El evento se ejecuta en la fase de captura

    function f (evento) {
        console.log("scroll");
    }

    window.addEventListener("scroll", f, { passive: true }); // Mejora el rendimiento al hacer scroll ñ

}