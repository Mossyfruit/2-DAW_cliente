"use strict";

let datos = JSON.parse(localStorage.getItem("localDatos")); // obtengo los datos en el almacén
mostrarDatos(datos); // muestro los datos

const nombre = document.getElementById("nombre");
const edad = document.getElementById("edad");
const guardar = document. getElementById("guardar");
const actualizar=document.getElementById("actualizar");
guardar.addEventListener("click", function () {
    grabarDato(nombre.value, edad.value);
});
const borrar = document. getElementById("borrar");
borrar.addEventListener("click", function () {
    borrarDato(nombre.value);
});
const borrarDatos = document. getElementById("borrarDatos");
borrarDatos.addEventListener("click", function () {
    borrarTodo();
});
actualizar.addEventListener("click", function(){
    actualizarDato(nombre.value, edad.value);
})
