"use strict"

let nombre;

/*
 El metodo alert sería
 function saludar(){
    alert (`Hola ${usuario}`);
 }
 function despedir(){
    alert (`Adios ${usuario}`)
 }
*/
function guardar(){
    nombre = document.getElementById("nombre").value;
}
function saludar(){
    let salida = document.getElementById("salida");
    salida.innerHTML = `Hola ${nombre}`;
}
function despedir(){
    
    document.getElementById("salida").innerHTML = `Adios ${nombre}`;
}


