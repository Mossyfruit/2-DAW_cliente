'use strict';
/**
 * Necesitamos la conexion a JQuery. Podemos sacarla en releases.jquery.com/jquery/
 */
leerDatos(); // MUESTRO LOS DATOS
const nombre = document.getElementById("nombre");
const clave = document.getElementById("clave");
const grabar = document.getElementById("guardar");
grabar.addEventListener("click", function (evento) { // escucho la pulsación del botón 'guardar'
    grabarDatos(nombre.value, clave.value);
});


