'use strict';

function borrarDato(nombre) {
    let datos = JSON.parse(localStorage.getItem("localDatos"));
    let newDatos = [];
    for (let dato of datos) {
        if (dato.nombre != nombre) {
            newDatos.push(dato);
        }
    }
    localStorage.setItem('localDatos', JSON.stringify(newDatos));
    mostrarDatos(newDatos);
}
