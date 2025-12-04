"use strict"
{
    let cajaRoja = document.querySelector (".cajaRoja"); 
    let cajaAzul = document.querySelector (".cajaAzul"); 
    //cajaRoja.draggable=true; //hacemos el elemento arrastrable 
    let contenedor = document.querySelector (".contenedor");

    const finalMessage = document.getElementById("finalMessage");
    let draggedBox = 0;

    /**
     * Lo que arrastro:
     * - dragstar: Al iniciar el arrastre
     * - drag: Mientras se arrastra
     * - dragend: Al finalizar el arrastre
     */

    cajaRoja.addEventListener ("dragstart", (e) => {
        // console.log ("dragstart");
        draggedBox = e.target;
    });

    cajaRoja.addEventListener ("drag", (e) => {
        // console.log ("drag");
    }); 

    cajaRoja.addEventListener ("dragend", (e) => {
        // console.log ("dragend");
    });

    cajaAzul.addEventListener ("dragstart", (e) => {
        // 
        draggedBox = e.target;
    });

    cajaAzul.addEventListener ("drag", (e) => {
        // console.log ("drag");
    }); 

    cajaAzul.addEventListener ("dragend", (e) => {
        // console.log ("dragend");
    });

    /**
     * Para el contenedor (zona de soltar):
     * - dragenter: Cuando el elemento arrastrado entra en la zona
     * - dragover: Mientras el elemento arrastrado está sobre la zona
     * - dragleave: Cuando el elemento arrastrado sale de la zona
     * - drop: Cuando se suelta el elemento arrastrado en la zona
     */

    contenedor.addEventListener ("dragenter", (e) => {
        console.log ("dragenter");
    });

    contenedor.addEventListener ("dragleave", (e) => {
        console.log ("dragleave");
    });

    contenedor.addEventListener ("dragover", (e) => {
        console.log ("dragover");
        e.preventDefault(); //necesario para que funcione el drop
    });

    contenedor.addEventListener ("drop", (e) => {
        console.log ("drop");
        contenedor.insertAdjacentElement ("afterbegin", draggedBox);
    });

    document.body.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    document.body.addEventListener("drop", (e) => {
        if (e.target === document.body) {
            document.body.insertAdjacentElement("afterbegin", draggedBox);
        }
    });
}