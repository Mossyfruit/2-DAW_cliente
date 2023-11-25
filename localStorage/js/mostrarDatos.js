'use strict';

function mostrarDatos(datos) {
    const cuerpo = document.getElementById("cuerpo");
    if (localStorage.getItem("localDatos") && JSON.parse(localStorage.getItem("localDatos")).length > 0) { // si hay una estructura y contiene algo
        cuerpo.innerHTML = "Los datos almacenados son: <br />";
        for (let dato of datos) {
            representaDatos(dato); // represento los datos
        }
    } else {
        cuerpo.innerHTML = 'No existen datos almacenados';
    }
}