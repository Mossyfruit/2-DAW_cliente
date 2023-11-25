'use strict';

function grabarDatos(nombre, edad) {
    console.log("Grabando dato...");

    let url = './php/servidorAjax.php';
    let datos = {
        'operacion': 'grabar',
        'nombre': nombre,
        'edad': edad
    };
    let metodo = 'post';

    let peticionAjax = clienteAjax(url, datos, metodo); // manejador de la peticion
    
    leerDatos();
}