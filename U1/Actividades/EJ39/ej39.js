"use strict"
{
    function eliminarDuplicados (vector) {
        let cont = 0;
        let newArray = [];
        vector.forEach(element => {
            if (!newArray.includes(element)){
                newArray.push(element);
            }
        });
        return newArray;
    }

    console.log(eliminarDuplicados(['x',10,'x',2,'10',10, true,true]));
}