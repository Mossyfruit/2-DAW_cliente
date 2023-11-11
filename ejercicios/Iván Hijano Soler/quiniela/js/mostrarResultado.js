'use strict'

function mostrarResultado(times){
   
   for (let i = 1; i < times; i++) {
    
    acumularResultados(partido(quiniela),resultadoPartido())
    
   }
   
   document.getElementById("resultado").innerHTML=acumulado;
   acumulado="";
}

function acumularResultados(partido,resultado){
    
    acumulado+=partido+resultado+"<br/>";
    
}
function mostrarResultadoP(times){
   
    for (let i = 1; i < times; i++) {
     
     acumularResultados(partido(quiniela),resultadoPartidoPeso1())
     
    }
    
    document.getElementById("resultado").innerHTML=acumulado;
    acumulado="";
 }
 
 function acumularResultados(partido,resultado){
     
     acumulado+=partido+resultado+"<br/>";
     
 }