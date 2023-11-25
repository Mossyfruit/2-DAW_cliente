'use strict';

function borrarDatos(nombre) {
    console.log("Eliminando dato...");

    let url = './php/servidorAjax.php';
    let datos = {
        'operacion': 'borrar',
        'nombre': nombre
    };
    let metodo = 'post';

    let peticionAjax = clienteAjax(url, datos, metodo);
    
    leerDatos(); 
}