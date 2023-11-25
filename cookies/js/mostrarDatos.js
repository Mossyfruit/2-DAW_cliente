'use strict';

function mostrarDatos(datos) {
    const cuerpo = document.getElementById("cuerpo");
    datos = datos.split(";"); // me quedo con los datos
    if (document.cookie && document.cookie.length > 0) { // si hay una estructura y contiene algo
        cuerpo.innerHTML = "Los datos almacenados son: <br />";
        for (let dato of datos) {
            dato = dato.split("="); // separo la clave del valor y los represento
            representaDatos(dato);
        }
    } else {
        cuerpo.innerHTML = 'No existen datos almacenados';
    }
}