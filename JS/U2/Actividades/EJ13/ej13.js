"use strict"
{
    let h1 = document.createElement("h1");
    h1.textContent = "Ejercicio 13: Selects";
    document.body.appendChild(h1);

    let formulario = document.createElement("form");
    formulario.setAttribute("id", "idFormulario");
    formulario.setAttribute("method", "post");
    formulario.setAttribute("action", "https://formsubmit.co/fmormun@g.educaand.es");
    document.body.appendChild(formulario);

    let label1 = document.createElement("label");
    label1.textContent = "Provincia: ";
    formulario.appendChild(label1);

    let select = document.createElement("select");
    select.setAttribute("name", "provincias");
    let optionDefault1 = document.createElement("option");
    optionDefault1.value = "";
    optionDefault1.textContent = "Select no seleccionado";
    optionDefault1.selected = true;
    optionDefault1.disabled = true;
    select.appendChild(optionDefault1);
    let alicante = document.createElement("option");
    alicante.setAttribute("value", "alicante");
    alicante.textContent = "Alicante";
    select.appendChild(alicante);
    let castellon = document.createElement("option");
    castellon.setAttribute("value", "castellon");
    castellon.textContent = "Castellón";
    select.appendChild(castellon);
    let valencia = document.createElement("option");
    valencia.setAttribute("value", "valencia");
    valencia.textContent = "Valencia";
    select.appendChild(valencia);
    formulario.appendChild(select);

    let br = document.createElement("br");
    formulario.appendChild(br);

    let label2 = document.createElement("label");
    label2.textContent = "Ciudad: ";
    formulario.appendChild(label2);

    let select2 = document.createElement("select");
    select2.setAttribute("name", "ciudades");
    let alicanteCapital = document.createElement("option");
    alicanteCapital.setAttribute("value", "alicanteCapital");
    alicanteCapital.textContent = "Alicante Capital";
    let elche = document.createElement("option");
    elche.setAttribute("value", "elche");
    elche.textContent = "Elche";
    let orihuela = document.createElement("option");
    orihuela.setAttribute("value", "orihuela");
    orihuela.textContent = "Orihuela";
    let castellonCapital = document.createElement("option");
    castellonCapital.setAttribute("value", "castellonCapital");
    castellonCapital.textContent = "Castellón Capital";
    let oropesa = document.createElement("option");
    oropesa.setAttribute("value", "oropesa");
    oropesa.textContent = "Oropesa"; 
    let vinaroz = document.createElement("option");
    vinaroz.setAttribute("value", "vinaroz");
    vinaroz.textContent = "Vinaroz";
    let valenciaCapital = document.createElement("option");
    valenciaCapital.setAttribute("value", "valenciaCapital");
    valenciaCapital.textContent = "Valencia Capital";
    let torrent = document.createElement("option");
    torrent.setAttribute("value", "torrent");
    torrent.textContent = "Torrent";
    let mislata = document.createElement("option");
    mislata.setAttribute("value", "mislata");
    mislata.textContent = "Mislata";
    select2.appendChild(opcionPorDefectoCiudad());

    formulario.appendChild(select2);

    let br2 = document.createElement("br");
    formulario.appendChild(br2);

    let btnSubmit = document.createElement("button");
    btnSubmit.setAttribute("type", "submit");
    btnSubmit.textContent = "Enviar";
    formulario.appendChild(btnSubmit);

    function opcionPorDefectoCiudad() {
        let opcionDefecto = document.createElement("option");
        opcionDefecto.value = "";
        opcionDefecto.textContent = "Select no seleccionado";
        opcionDefecto.selected = true;
        opcionDefecto.disabled = true;
        return opcionDefecto;
    }

    select.addEventListener("change", function() {
        select2.innerHTML = "";
        select2.appendChild(opcionPorDefectoCiudad());

        if (select.value === "alicante") {
            select2.appendChild(alicanteCapital);
            select2.appendChild(elche);
            select2.appendChild(orihuela);
        } else if (select.value === "castellon") {
            select2.appendChild(castellonCapital);
            select2.appendChild(oropesa);
            select2.appendChild(vinaroz);
        } else if (select.value === "valencia") {
            select2.appendChild(valenciaCapital);
            select2.appendChild(torrent);
            select2.appendChild(mislata);
            select2.value = "mislata";
        }
    });

    formulario.addEventListener("submit", function (e){
        if (select.value === "" || select2.value === "") {
            e.preventDefault();
            alert("Los selects deben estar marcados.");
        }
    });
}