'use strict';

function grabarDato(clave, valor) {
    let fecha = new Date(); // fecha actual en UTC
    let caducidad = 5 * 60 * 1000; // 1 minuto de caducidad
    let fechaMilisegundos = fecha.getTime() + caducidad; // fecha actual + la caducidad
    fecha.setTime(fechaMilisegundos); // convierto los milisegundos en fecha UTC
    document.cookie =
        clave + "=" +
        valor + ";expires=" +
        fecha.toUTCString() + ";path=./;SameSite=Strict;Secure";
    datos = document.cookie; // me quedo con los datos: clave, valor en un array [[clave, valor]];
    mostrarDatos(datos);
}


