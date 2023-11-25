'use strict';

function borrarDato(nombre) {
    let datos = JSON.parse(sessionStorage.getItem("localDatos"));
    let newDatos = [];
    for (let dato of datos) {
        if (dato.nombre != nombre) {
            newDatos.push(dato);
        }
    }
    sessionStorage.setItem('localDatos', JSON.stringify(newDatos));
    mostrarDatos(newDatos);
}