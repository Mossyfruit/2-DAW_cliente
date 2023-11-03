'use strict';


const clave = document.getElementById("clave");
const valor = document.getElementById("valor");
const guardar= document.getElementById("guardar");
const borrar= document.getElementById("borrar");
guardar.addEventListener("click", function(){
    grabarDato(clave.value , valor.value);
})

borrar.addEventListener("click", function(){
    borrarDato(clave.value);
})