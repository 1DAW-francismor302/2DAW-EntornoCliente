"use strict"
{
    let persona = {
        nombre: "Pepe",
        edad: 30,
        ciudad: "Cádiz"
    };

    console.log(persona);
    console.log(persona.nombre);
    persona.edad = 33;
    console.log(persona.edad);

    console.log(persona["nombre"]);

    let animal = {
        tipo: "gato",
        patas: 4,
        tieneBigotes: true,
        dimensiones: {
            alto: 60,
            ancho: 30,
            largo: 80
        },
        dieta: ["pescado", "pienso", "sobras"]
    };

    console.log(animal);

    animal.dimensiones["largo"] = 90;

    let personaCompleta = {
        nombre: "Hugo",
        dni: "28123456T",
        edad: 19,
        ciudad: "Sevilla",
        pasatiempos: ["jugar a consola", "javascript", "escuchar música"],
        contacto: {
            email: "hsilben979@g.educaand.es",
            telefono: 624975516,
            instagram: "@noQuieroDecirlo"
        },
        saludar() {
            console.log("Holaaaaaaaa");
        },
        saludarCompleto () {
            console.log("Hola, me llamo " + this.nombre + `y tengo this.edad` + "años");
        },
        decirEmail() {
            return this.contacto.email;
        }
    }
    personaCompleta.saludarCompleto();
    let e = personaCompleta.decirEmail();
    console.log(e);

    /**
     * DESESTRUCTURACIÓN DE UN OBJETO LITERAL
     */

    //personaCompleta.contacto.instagram
    const {nombre} = personaCompleta;
    console.log(nombre);

    /**
     * UNIR OBJETOS LITERALES
     */
    let producto = {
        nombreProducto: "Lejía",
        precio: 2.95,
        marca: "don limpio"
    };
    let colores = {
        colorLiquido: "amarillo",
        colorRecipiente: "blanco",
        colorTapon: "azul"
    };

    //UNIR OBJETOS POR REFERENCIA:
    // let productoColor1 = {producto, colores};
    // console.log(productoColor1);
    // producto.nombreProducto="suavizante";
    // console.log(productoColor1);


    //UNIR OBJETOS POR POR COPIA:
    let productoColor2 = {...producto,...colores};
    console.log(productoColor2);
    producto.nombreProducto="suavizante";
    console.log(productoColor2);
}