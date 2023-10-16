"use strict"

/**
 * En este septimo y ultimo ejercicio recreamos el rectangulo que activa los alerts cuando el raton pasa por encima o debajo, aprovechando
 * el nombre dado por el usuario durante el "prompt"
 */

/**
 * Definimos la variable "nombre", usando la funcion prompt
 */
let nombre = prompt("Introduce tu nombre","Usuario")

/**
 * Generamos las funciones saludar() y despedir()
 */

function saludar(){
    alert(`Hola ${nombre}`);
}

function despedir(){
    alert(`Adios ${nombre}`);
}