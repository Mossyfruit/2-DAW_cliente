"use strict"

/**
 * La conversion numerica entre bases en js es muy simple. 
 * Se puede pasar de decimal a base con X.toString(base),
 * y de base a decimal con parseInt(X,base)
 * 
 * Crearemos funciones para cada uno.
 *
 */

//Establecemos valores por defecto
let operando1 = 0;

let output= 0;

function binario(operando1){//Funcion para decimal a binario
    operando1 = parseInt(document.getElementById("operando1").value) ;
    

     output= document.getElementById("output");

    let numero= operando1.toString(2);
    output.innerHTML= numero;
}
function octario(operando1){//Funcion para decimal a octario
    operando1 = parseInt(document.getElementById("operando1").value) ;
    

     output= document.getElementById("output");

    let numero= operando1.toString(8);
    output.innerHTML= numero;
}
function hexadecimal(operando1){//Funcion para decimal a hexadecimal
    operando1 = parseInt(document.getElementById("operando1").value) ;
    

     output= document.getElementById("output");

    let numero= operando1.toString(16);
    output.innerHTML= numero;
}
function Bdecimal(operando1){//Funcion para binario a decimal
    operando1 = document.getElementById("operando1").value ;
    

     output= document.getElementById("output");

    let numero= parseInt(operando1,2);
    output.innerHTML= numero;
}
function Odecimal(operando1){//Funcion para octario a decimal
    operando1 = document.getElementById("operando1").value ;
    

     output= document.getElementById("output");

    let numero= parseInt(operando1,8);
    output.innerHTML= numero;
}
function Hdecimal(operando1){//Funcion para hexadecimal a decimal
    operando1 = document.getElementById("operando1").value ;
    

     output= document.getElementById("output");

    let numero= parseInt(operando1,16);
    output.innerHTML= numero;
}
//Programamos la activación de nuestras funciones al pulsar los botones:
document.getElementById("2").onclick = function(){
    binario(operando1);
}
document.getElementById("8").onclick = function(){
    octario(operando1);
}
document.getElementById("16").onclick = function(){
    hexadecimal(operando1);
}
document.getElementById("10/2").onclick = function(){
    Bdecimal(operando1);
}
document.getElementById("10/8").onclick = function(){
    Odecimal(operando1);
}
document.getElementById("10/16").onclick = function(){
    Hdecimal(operando1);
}