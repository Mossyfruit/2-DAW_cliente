'use strict';

function grabarDato(nombre, edad) {
    if (sessionStorage.getItem("localDatos") == null) { // ¿Y si grabo por primera vez o despues de borrar todo?
        sessionStorage.setItem('localDatos', JSON.stringify([]));
    }
    let datos = JSON.parse(sessionStorage.getItem("localDatos"));
    let dato = {
        nombre: nombre,
        edad: edad
    };
    datos.push(dato);
    sessionStorage.setItem('localDatos', JSON.stringify(datos));
    mostrarDatos(datos);
}