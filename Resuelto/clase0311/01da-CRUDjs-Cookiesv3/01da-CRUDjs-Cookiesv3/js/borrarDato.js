'use strict';

function borrarDato(nombre){
    datos = JSON.parse(localStorage.getItem("localData"));
    let newData=[];
    for(let dato of datos){
        if(dato.nombre != nombre) {
            newData.push(dato);
        }
    } 
    localStorage.setItem('localData', JSON.stringify(newData));
   
    mostrarDato();
}
//localStorage hay que quitar el objeto nulo, o localStorage.removeItem('localData')

function borrarTodo(){
     window.localStorage.clear();
     console.log(localStorage);
     
     mostrarDato();
}