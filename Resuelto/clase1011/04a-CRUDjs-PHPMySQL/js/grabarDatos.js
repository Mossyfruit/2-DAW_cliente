'use strict';

function grabarDatos(nombre, clave) {
    console.log("Grabando dato...");
    let url='./php/servidorAjax.php';
    let metodo= 'post';
    let datos = {
        "operacion": 'grabar',
        "nombre": nombre,
        "edad": clave
    };

    let peticionAjax = clienteAjax(url, datos, metodo); // HAGO LA LLAMADA PARA GRABAR LOS DATOS

    peticionAjax.done(function (data) { // SI HA IDO BIEN, MUESTRO LO QUE DEVUELVE LA LLAMADA
        leerDatos();
    });

    peticionAjax.fail(function (data) { // SI ALGO HA IDO MAL, MUESTRO LO QUE DEVUELVE LA LLAMADA
        console.log(data);
    });
}