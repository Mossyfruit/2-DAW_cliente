"use strict"

/**
 * En el sexto ejercicio saludamos y nos despedimos con botones usando el nombre registrado por el usuario mediante prompt.
 */


/**
 * Usaremos un listener para asegurar la carga de la pagina.
 */


window.addEventListener('load', function(){ //listener
    /**
     * Definimos la variable "nombre", usando la funcion prompt
     */
    let nombre = prompt("Introduce tu nombre","Usuario")
    let output = document.getElementById("output");

    /**
     * Generamos las funciones saludar() y despedir()
     */


    function saludar(){
        output.innerHTML = `¡Hola ${nombre}!`;
    }
    
    function despedir(){
        output.innerHTML = `¡Adios ${nombre}!`;
    }

    //Añadimos los listener de los botones

    this.document.getElementById("Saludar").addEventListener('click',saludar)
    this.document.getElementById("Despedir").addEventListener('click',despedir)
    //Metodo alert 
    /*
    function saludar(){
    alert(`Hola ${nombre}`);
    }

    function despedir(){
    alert(`Adios ${nombre}`);
    } */
})
