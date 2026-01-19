"use strict"
{
    // fetch("https://jsonplaceholder.typicode.com/posts")
    // .then(response => response.json())
    //     .then(datos => {
    //     console.log(datos);
    // });

    // async function obtenerPost() {
    //     const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    //     const post = await response.json();
    //     console.log(post.title);
    // }
    // obtenerPost();

    // await solo se puede usar dentro de funciones async, sino da error

    // fetch ("../Recursos/texto.txt")
    // .then (response => response.text())
    // .then (datos => console.log(datos));

    // fetch ("../Recursos/texto.txt")
    // .then (function(response) {
    //     let datos = response.text();
    //     return datos;
    // })
    // .then (function(texto) {
    //     console.log(texto);
    //     console.log(texto.length);
    // });

    // fetch ("../Recursos/flores.jpg")
    // .then (function(response) {
    //     let datos = response.text();
    //     return datos;
    // })
    // .then (function(texto) {
    //     console.log(texto);
    //     console.log(texto.length);
    // });

    // fetch ("../Recursos/flores.jpg")
    // .then (function(response) {
    //     let datos = response.blob();
    //     return datos;
    // })
    // .then (function(miBlob) {
    //     console.log(miBlob);
    //     console.log(miBlob.size);
    //     console.log(miBlob.type);

    //     let objectURL = URL.createObjectURL(miBlob);
    //     let myImage = document.createElement("img");
    //     myImage.setAttribute("src", objectURL);
    //     document.body.appendChild(myImage);
    // });

    fetch ("../Recursos/flores.jpg")
    .then (function(response) {
        let datos = response.blob();
        return datos;
    })
    .then (function(miBlob) {
        console.log(miBlob);
        console.log(miBlob.size);
        console.log(miBlob.type);

        let objectURL = URL.createObjectURL(miBlob);
        localStorage.setItem("foto", JSON.stringify(objectURL));
    });

    document.createElement("button");
    let boton = document.createElement("button");
    boton.textContent = "Mostrar Foto";
    document.body.appendChild(boton);

    boton.addEventListener("click", () => {
        let foto = JSON.parse(localStorage.getItem("foto"));
        let myImage = document.createElement("img");
        myImage.setAttribute("src", foto);
        document.body.appendChild(myImage);
    });


}