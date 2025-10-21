"use strict"
{
    function eliminarCaracteres (cadena, caracterEliminar){
        let regExp = new RegExp (caracterEliminar, "g");
        return cadena.replace(regExp, "");
    }

    console.log(eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"));
}