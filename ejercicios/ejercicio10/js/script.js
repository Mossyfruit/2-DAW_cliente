"use strict"

/**
 * En este septimo y ultimo ejercicio recreamos el rectangulo que activa los alerts cuando el raton pasa por encima o debajo, aprovechando
 * el nombre dado por el usuario durante el "prompt"
 */

/**
 * Definimos la variable "nombre", usando la funcion prompt
 */
let nombre = "default";
    let output = document.getElementById("output");

    /**
     * Generamos las funciones saludar() y despedir()
     */


    function saludar(nombre){
        nombre= document.getElementById("nombre").value;
        const output = document.getElementById("output");
        output.innerHTML= `Hola ${nombre}`;
    }
    
    function despedir(nombre){
        nombre= document.getElementById("nombre").value;
        const output = document.getElementById("output");
        output.innerHTML = `¡Adios ${nombre}!`;
    }

    //Añadimos los listener de los botones

    document.getElementById("Saludar").onclick = function(){
        saludar(nombre);
    };
    document.getElementById("Despedir").onclick = function () {
        despedir(nombre);        
    };