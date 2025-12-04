"use strict"
{
    document.body.innerHTML = "<h2>Ocultar Y Eliminar</h2>";

    let btn1 = document.createElement("button");
    btn1.textContent = "Reaparecer";
    document.body.appendChild(btn1);

    let p1 = document.createElement("p");
    p1.textContent = "Carmelo";
    document.body.appendChild(p1);

    let p2 = document.createElement("p");
    p2.textContent = "Dominguix";
    document.body.appendChild(p2);

    let p3 = document.createElement("p");
    p3.textContent = "Pablo";
    document.body.appendChild(p3);

    p1.addEventListener("mouseleave", () => {
        p1.setAttribute("hidden", true);
    });

    p2.addEventListener("mouseleave", () => {
        p2.setAttribute("hidden", true);
    });

    p3.addEventListener("mouseleave", () => {
        p3.setAttribute("hidden", true);
    });

    p1.addEventListener("dblclick", function(){
        this.remove(p1);
    });

    p2.addEventListener("dblclick", function(){
        this.remove(p2);
    });

    p3.addEventListener("dblclick", function(){
        this.remove(p3);
    });

    btn1.addEventListener("click", () => {
        p1.removeAttribute("hidden");
        p2.removeAttribute("hidden");
        p3.removeAttribute("hidden");
    });
}