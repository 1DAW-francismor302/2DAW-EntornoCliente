"use strict"
{
    //TEMPORIZADORES

    // const max = 500000;
    // for (let i = 0; i < max; i++) {
    //     console.log(i);
    // }

    let id = setInterval(function(){
        let d = new Date().toLocaleDateString();
        console.log(d);
    }, 2000); // Ejecuta la función cada 2 segundos

    // for (let i = 0; i < max; i++) {
    //     console.log(i);
    // }

    setTimeout(function(){
        let d = new Date().toLocaleDateString();
        console.log("set timeout");
    }, 3000); // Ejecuta la función después de 3 segundos

    clearInterval(id); // Detiene la ejecución del setInterval

}