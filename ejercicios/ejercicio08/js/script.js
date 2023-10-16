"use strict"

/**
 * El siguiente ejercicio nos pide que hagamos lo mismo que en el primero , pero pidiendole al usuario su nombre a traves del DOM */

/**
 * Definimos la variable "nombre" usando un valor por defecto "Usuario". El usuario podra escribir en un textfield que recogeremos en este
 * archivo js para cambiarlo.
 */
 

//Vamos a usar un handler para garantizar la carga
let nombre = "default";


function inicio() {
    function saludar(nombre){
        nombre= document.getElementById("nombre").value;
        const output = document.getElementById("output");
        output.innerHTML= `Hola ${nombre}`;
    }

    document.getElementById("Saludar").onclick = function(){
        saludar(nombre);
    };
    
    

    /**
    * Generamos las funciones saludar() y despedir()
    */

    /*Metodo Alert:

    alert(`Hola ${nombre}`);

    /*
    function despedir(){
    alert(`Adios ${nombre}`);
    }*/

}
window.onload = inicio; //handler