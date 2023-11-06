'use strict';

function grabarDato(nombre,edad){
    datos.push({
        nombre: nombre,
        edad: edad
    });
    //localStorage guarda los datos como json
    localStorage.setItem('localData',JSON.stringify(datos));//convierte datos en string para pasar a formato JSON
    console.log(JSON.parse(localStorage.getItem("localData")));//parsea JSON al tipo de dato correspondiente
    mostrarDato();
    
}