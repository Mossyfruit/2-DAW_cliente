'use strict';

function borrarDatos(id) {
    console.log("Eliminando dato...");

    let datos = {
        "operacion": 'borrar',
        "valor": id
    };


    let peticionAjax = clienteAjax('./php/servidorAjax.php', datos, 'post'); // HAGO LA LLAMADA PARA GRABAR LOS DATOS

    peticionAjax.done(function (data) { // SI HA IDO BIEN, MUESTRO LO QUE DEVUELVE LA LLAMADA
        leerDatos();
    });

    peticionAjax.fail(function (data) { // SI ALGO HA IDO MAL, MUESTRO LO QUE DEVUELVE LA LLAMADA
        console.log(data);
    });
}