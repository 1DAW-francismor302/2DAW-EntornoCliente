"use strict"
{
    document.body.innerHTML = "<h2>Posición Del Ratón</h2>";

    let h4 = document.createElement("h4");

    document.addEventListener("mousemove", (event) => {
        h4.innerHTML = "X: " + event.screenX + ". <br> Y: " + event.screenY + "."; 
    });

    document.body.appendChild(h4);
}