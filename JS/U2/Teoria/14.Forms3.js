"use strict"
{
    let formulario = document.querySelector("#idFormulario");
    const datos = new FormData(formulario);
    console.log(datos.get("nombre"));
    console.log(datos.get("edad"));
    console.log(datos.get("email"));

    formulario.addEventListener("submit", function (e){
        // e.preventDefault();
        // formulario.submit();8

        datos.append("dni", "11223345G");
        datos.append("address", "Royal St.");
    });
}