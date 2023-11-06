'use strict';

function mostrarDato(){
    const cuerpo= document.getElementById("cuerpo");
    datos= document.cookie.split(";");

    if(document.cookie && document.cookie.length >0){//Si hay una cookie
    cuerpo.innerHTML = "Las cookies almacenadas son: <br/>";
    representaDato(datos)
    }else{
        cuerpo.innerHTML = "No hay datos"
    }
}