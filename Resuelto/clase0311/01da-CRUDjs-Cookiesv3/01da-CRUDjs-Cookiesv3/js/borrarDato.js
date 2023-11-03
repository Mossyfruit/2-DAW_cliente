'use strict';

function borrarDato(clave){
    let fecha = new Date();//UTC
    let caducidad=2*60*1000;
    let fechaMs=fecha.getTime() - caducidad;// Fecha actual - la caducidad
    fecha.setTime(fechaMs);//ms to UTC
    document.cookie= //Este codigo define las caracteristicas de la cookie a revisar
        clave+ "="+
         ";expires="+ 
        fecha.toUTCString() +
        ";path./;SameSite=Strict;Secure";
    console.log(document.cookie);
}

/* function borrarDato(clave) {
let minutes =2;
let fecha= new date(new Date().getTime()-minutes*60000);
}*/