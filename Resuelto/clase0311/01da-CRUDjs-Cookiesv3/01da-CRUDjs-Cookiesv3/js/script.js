'use strict';
/**
 * 
 * Cada pagina tiene su propio almacenamiento de datos.
 * 
 * JSON.stringify()--Convierte en un JSON
 * JSON.parse()--pasa de JSON a otra cosa
*/



const nombre = document.getElementById("nombre");
const edad = document.getElementById("edad");
const guardar= document.getElementById("guardar");
const borrar= document.getElementById("borrar");
const borrarTodos= document.getElementById("borrarTodo");
mostrarDato();
guardar.addEventListener("click", function(){
    grabarDato(nombre.value , edad.value);
})

borrar.addEventListener("click", function(){
    borrarDato(nombre.value);
})

borrarTodos.addEventListener("click", function(){
    borrarTodo();
    
})