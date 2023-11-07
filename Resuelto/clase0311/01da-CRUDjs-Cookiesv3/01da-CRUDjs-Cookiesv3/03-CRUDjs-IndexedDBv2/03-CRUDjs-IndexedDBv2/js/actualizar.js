'use strict'

//Hacemos una funcion para actualizar tablas en la base de datos
function updateTable(id) {
   
    //Crearemos un nuevo boton al principio de la aplicacion, que tome el NOMBRE del dato, localice 
    //el elemento en la tabla con el mismo nombre, recoja su id, lo elimine, y reinserte un valor en el
    //mismo sitio con el nuevo valor asociado a dicho NOMBRE.
    solicitudDB = indexedDB.open(nombreBD, versionBD);
    solicitudDB.onerror = function (event) {
        console.error(`IndexedDB error: ${event.target.errorCode}`);
    };
    solicitudDB.onsuccess = function (event) {
        bd = event.target.result;
        canalBD = bd.transaction(tablaBD, "readwrite").objectStore(tablaBD);
        canalBD.delete(registro.id);
        //ahora introducimos los nuevos valores
        canalBD.put({ nombre, edad });
    };
    mostrarDato();

  

}
