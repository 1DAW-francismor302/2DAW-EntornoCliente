"use strict"

{
    let mult = 1;
    
    function facorial (n){
        if (n < 0){
            console.log("No se puede hacer el factorial de " + n);
        }else if (n === 0){
            console.log("El factorial de 0 siempre es 1");
        }else{
            for(let i = 1; i<=n; i++){
                mult *= i
            }
        }
        console.log("El factorial de " + n + " es: " + mult);
    }
    facorial(5);


    function factorialRecursive (n) {
        
        if(n < 0){
            return "No se puede hacer el factorial de " + n;
        }

        if (n === 0 || n === 1){
            return 1;
        }

        return n*factorialRecursive(n-1);
        
    }

    console.log(factorialRecursive(5));


}