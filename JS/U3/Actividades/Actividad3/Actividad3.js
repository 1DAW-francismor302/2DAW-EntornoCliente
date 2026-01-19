"use strict"
{
    let br = document.createElement("br");

    let form = document.createElement("form");
    let labelNombre = document.createElement("label");
    labelNombre.textContent = "Nombre de la tarea: ";
    form.appendChild(labelNombre);

    let inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.placeholder = "Escribe el nombre";
    form.appendChild(inputNombre);

    let labelPrioridad = document.createElement("label");
    labelPrioridad.textContent = " Prioridad: ";
    form.appendChild(labelPrioridad);

    let selectPrioridad = document.createElement("select");
    let opciones = ["Baja", "Media", "Alta"];
    for (let opcion of opciones) {
        let option = document.createElement("option");
        option.value = opcion.toLowerCase();
        option.textContent = opcion;
        selectPrioridad.appendChild(option);
    }
    form.appendChild(selectPrioridad);

    form.appendChild(br);

    let boton = document.createElement("button");
    boton.type = "submit";
    boton.textContent = "Guardar Tarea";
    form.appendChild(boton);

    document.body.appendChild(form);

    let mensaje = document.createElement("p");
    document.body.appendChild(mensaje);

    let listaTareas = document.createElement("ul");
    document.body.appendChild(listaTareas);

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let nombreTarea = inputNombre.value.trim();
        let prioridadTarea = selectPrioridad.value;
        if (nombreTarea !== "") {
            if (prioridadTarea !== "") {
                let tarea = {
                    nombre: nombreTarea,
                    prioridad: prioridadTarea
                };
                agregarTareaOrdenadasPrioridad(tarea);
            } else {
                alert("La prioridad de la tarea no puede estar vacía.");
            }
        } else {
            alert("El nombre de la tarea no puede estar vacío.");
        }
        inputNombre.value = "";
        selectPrioridad.value = "baja";
        mensaje.textContent = "Tarea guardada correctamente.";
    });

    let btnVerTareas = document.createElement("button");
    btnVerTareas.textContent = "Ver Tareas";
    document.body.appendChild(btnVerTareas);

    let btnEliminarTareas = document.createElement("button");
    btnEliminarTareas.textContent = "Eliminar Tareas";
    document.body.appendChild(btnEliminarTareas);

    btnEliminarTareas.addEventListener("click", () => {
        localStorage.removeItem("tareas");
        listaTareas.innerHTML = "";
        mensaje.textContent = "Todas las tareas han sido eliminadas.";
    });

    btnVerTareas.addEventListener("click", () => {
        listaTareas.innerHTML = "";
        let tareasGuardadas = localStorage.getItem("tareas");
        if (tareasGuardadas) {
            let tareas = JSON.parse(tareasGuardadas);
            for (let tarea of tareas) {
                let li = document.createElement("li");
                li.textContent = `Nombre: ${tarea.nombre} - Prioridad: ${tarea.prioridad}`;
                listaTareas.appendChild(li);
            }
        } else {
            mensaje.textContent = "No hay tareas guardadas.";
        }
    });

    function agregarTareaOrdenadasPrioridad(tarea) {
        let prioridadAlta = [];
        let prioridadMedia = [];
        let prioridadBaja = [];

        let tareasGuardadas = localStorage.getItem("tareas");
        
        if (tareasGuardadas) {
            let tareasExistentes = JSON.parse(tareasGuardadas);
            for (let tareaExistente of tareasExistentes) {
                if (tareaExistente.prioridad === "alta") {
                    prioridadAlta.push(tareaExistente);
                } else if (tareaExistente.prioridad === "media") {
                    prioridadMedia.push(tareaExistente);
                } else {
                    prioridadBaja.push(tareaExistente);
                }
            }
        }

        if (tarea.prioridad === "alta") {
            prioridadAlta.push(tarea);
        } else if (tarea.prioridad === "media") {
            prioridadMedia.push(tarea);
        } else {
            prioridadBaja.push(tarea);
        }

        let tareas = prioridadAlta.concat(prioridadMedia, prioridadBaja);

        localStorage.setItem("tareas", JSON.stringify(tareas));
    }
}