'use strict';

// REALIZO LA LLAMADA 'Ajax' Y GUARDO EL RESULTADO EN 'respuesta'
// El método $.ajax es configurado a través de un objeto
function clienteAjax(url, datos, metodo) {
    let respuesta = $.ajax({
        url: url, // la URL para la petición
        data: datos, // la información a enviar y recibir
        type: metodo, // especifica si será una petición POST o GET
        dataType: 'json' // el tipo de información que se espera de respuesta
    });
    return respuesta;
}

