'use strict';

function borrarDato(clave) {
    let fecha = new Date(); // fecha actual en UTC
    let caducidad = 1 * 60 * 1000; // 1 minuto de caducidad
    let fechaMilisegundos = fecha.getTime() - caducidad; // fecha actual + la caducidad
    fecha.setTime(fechaMilisegundos); // convierto los milisegundos en fecha UTC
    document.cookie =
        clave + "=;expires=" +

        fecha.toUTCString() + ";path=./;SameSite=Strict;Secure";
    let datos = document.cookie; // me quedo con los datos: clave, valor en un array [[clave, valor]];
    mostrarDatos(datos);
}