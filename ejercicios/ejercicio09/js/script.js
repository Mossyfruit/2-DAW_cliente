"use strict"

/**
 * A continuacion replicamos el ejercicio del cuadrado , usando el DOM. Pedimos el nombre de usuario por un textfield
 */


window.addEventListener('load', function(){ //listener
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
    //Metodo alert 
    /*
    function saludar(){
    alert(`Hola ${nombre}`);
    }

    function despedir(){
    alert(`Adios ${nombre}`);
    } */
})
