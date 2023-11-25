'use strict';

let datos = document.cookie; // obtengo las cookies y muestro los datos
mostrarDatos(datos);

const clave = document.getElementById("clave");
const valor = document.getElementById("valor");
const guardar = document.getElementById("guardar");
const actualizar = document.getElementById("actualizar");
guardar.addEventListener("click", function () {
    grabarDato(clave.value, valor.value);
});
const borrar = document. getElementById("borrar");
borrar.addEventListener("click", function () {
    borrarDato(clave.value);
});
actualizar.addEventListener("click", function(){
    actualizarDato(clave.value, valor.value);
})