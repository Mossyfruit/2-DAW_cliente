"use strict"

function borrarTodo() {
    sessionStorage.removeItem('localDatos');
    mostrarDatos(datos);
}