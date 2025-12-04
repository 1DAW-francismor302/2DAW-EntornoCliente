"use strict"
{
    function ordenar (vector){
        let mayorAmenor = vector.sort( function (first, second){
            if (first > second){
                return -1;
            }else{
                return 1;
            }
        })

        let menorAmayor = [...vector].sort( function (first, second){
            if (first < second){
                return -1;
            }else{
                return 1;
            }
        })

        return `asc: [${menorAmayor}] desc: [${mayorAmenor}]`;
    }


    console.log(ordenar([7,10000,5,8,3,9,100]));
}