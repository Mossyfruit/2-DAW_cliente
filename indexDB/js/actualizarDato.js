'use strict'

function actualizarDato(id, edad) {
    id=parseInt(id);
    console.log("Actualizando datos...");
    solicitudDB = indexedDB.open(nombreBD, versionBD);
    solicitudDB.onerror = function (event) {
        console.error(`IndexedDB error: ${event.target.errorCode}`);
    };
    solicitudDB.onsuccess = function (event) {
        //debemos hallara la id del objeto que corresponda al id proporcionado
        bd = event.target.result;
        canalBD = bd.transaction(tablaBD, "readwrite").objectStore(tablaBD);
        canalBD.get(id).onsuccess = function (event) {
            canalBD = bd.transaction(tablaBD, "readwrite").objectStore(tablaBD);
            console.log(id);
            //si el id existe, actualizamos los datos
            if (event.target.result != undefined) {
                console.log("alterando edad")
                event.target.result.edad = edad;
                canalBD.put(event.target.result);
                mostrarDatos();
                }
            else {
                console.log("No existe el id");
                  }
        }

       
        
    };
    
}