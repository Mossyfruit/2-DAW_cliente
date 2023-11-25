'use strict';

function actualizarDatos(nombre, edad) {
    console.log("Actualizando dato...");

    let url = './php/servidorAjax.php';
    let datos = {
        'operacion': 'actualizar', //solo cambiamos el nombre de la operacion
        'nombre': nombre,
        'edad': edad
    };
    let metodo = 'post';

    let peticionAjax = clienteAjax(url, datos, metodo); // manejador de la peticion
    
    leerDatos();
}