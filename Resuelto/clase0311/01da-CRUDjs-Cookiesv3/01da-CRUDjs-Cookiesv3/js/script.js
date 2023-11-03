'use strict';


const clave = document.getElementById("clave");
const valor = document.getElementById("valor");
const guardar= document.getElementById("guardar");
guardar.addEventListener("click", function(){
    grabarDato(clave.value , valor.value);
})