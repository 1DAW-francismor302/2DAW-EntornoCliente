"use strict"
{
    let myArray = ["Gato", "Jirafa", "Rinoceronte"];
    console.log(myArray);

    localStorage.setItem("array", myArray);
    let myNewArray = localStorage.getItem("array");
    console.log(myNewArray);

    let myArray2 = ["Gato", "Jirafa", "Rinoceronte"];
    console.log(myArray2);

    localStorage.setItem("array2", JSON.stringify(myArray2));
    let myNewArray2 = JSON.parse(localStorage.getItem("array2"));
    console.log(myNewArray2);
}