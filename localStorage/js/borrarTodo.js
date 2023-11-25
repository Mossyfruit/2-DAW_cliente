"use strict"

function borrarTodo() {
    localStorage.removeItem('localDatos');
    mostrarDatos(datos);
}