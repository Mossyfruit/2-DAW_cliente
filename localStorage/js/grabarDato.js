'use strict';

function grabarDato(nombre, edad) {
    if (localStorage.getItem("localDatos") == null) { // ¿Y si grabo por primera vez o despues de borrar todo?
        localStorage.setItem('localDatos', JSON.stringify([]));
    }
    let datos = JSON.parse(localStorage.getItem("localDatos"));
    let dato = {
        nombre: nombre,
        edad: edad
    };
    datos.push(dato);
    localStorage.setItem('localDatos', JSON.stringify(datos));
    mostrarDatos(datos);
}