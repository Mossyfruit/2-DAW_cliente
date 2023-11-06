'use strict';
/**
 * 
 * Falta crear la funcion Actualizar. Actualizar consistira en revisar que el dato existe, borrar el antiguo, y guardar el nuevo.
 * El proceso será:
 * Si Dato Existe:
 *  Borrar Dato
 *  Guardar Dato
 */
let datos=[];
const clave = document.getElementById("clave");
const valor = document.getElementById("valor");
const guardar= document.getElementById("guardar");
const borrar= document.getElementById("borrar");
mostrarDato();
guardar.addEventListener("click", function(){
    grabarDato(clave.value , valor.value);
})

borrar.addEventListener("click", function(){
    borrarDato(clave.value);
})