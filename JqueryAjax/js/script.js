'use strict';

/*
Aquí se creaba la BBDD en IndexedDB 
*/

leerDatos(); // MUESTRO LOS DATOS
const nombre = document.getElementById("nombre");
const edad = document.getElementById("edad");
const grabar = document.getElementById("guardar");
const actualizar = document.getElementById("actualizar");
grabar.addEventListener("click", function (evento) { // escucho la pulsación del botón 'guardar'
    grabarDatos(nombre.value, edad.value);
});
actualizar.addEventListener("click", function (evento){
    actualizarDatos(nombre.value, edad.value);
})

