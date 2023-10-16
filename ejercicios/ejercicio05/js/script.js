"use strict"

/**
 * El siguiente ejercicio nos pide que hagamos lo mismo que en el primero , pero pidiendole al usuario su nombre a traves de un Prompt */

/**
 * Definimos la variable "nombre" usando un Prompt. Prompt es un objeto de tipo window que obstruye al usuario, pidiendole que rellene un campo
 * Los parametros de esta función son (Texto del prompt, Valor por defecto)
 */
 

//Vamos a usar un handler para garantizar la carga

function inicio() {
    let nombre = prompt("Introduce tu nombre","Usuario")
    let output = document.getElementById("output");
    output.innerHTML= `Hola ${nombre}`;
    

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