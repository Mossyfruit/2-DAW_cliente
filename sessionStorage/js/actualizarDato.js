'use strict'
function actualizarDato(nombre, edad){
    let datos = JSON.parse(sessionStorage.getItem('localDatos'));
    for (var i=0; i<datos.length;i++){
        if (datos[i].nombre == nombre){
            datos[i].edad = edad;
            break;
            }
    }
 sessionStorage.setItem('localDatos', JSON.stringify(datos));
 mostrarDatos(datos);

}
