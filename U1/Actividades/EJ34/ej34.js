"use strict"
{
    function validarEmail (email) {
        let regExp = new RegExp(/[0-9a-zA-Z]@{1}[0-9a-zA-Z]+[.][a-zA-Z]{2}/);

        return regExp.test(email);
    }

    console.log(validarEmail("javier.ferrer@iesmar@tinezm.es"))
}