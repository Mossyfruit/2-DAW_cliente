"use strict"

/**
 * Queremos crear una calculadora basica. Para eso necesitaremos: 
 * >Funciones que capten los operandos del DOM
 * >Funciones que los recojan y usando Math, apliquen las operaciones, enviando los resultados a un output
 * >TODAS las funciones deben captar los valores cada una por si A: el usuario cambia los valores/ o /B: el usuario usa una opcion
 * en cualquier orden
 *
 */

//Establecemos valores por defecto
let operando1 = 12;
let operando2 = 13;
let output= 0;

function sumar(operando1,operando2){//Funcion para sumar
    operando1 = parseFloat(document.getElementById("operando1").value) ;
    operando2 = parseFloat(document.getElementById("operando2").value) ;

     output= document.getElementById("output");
    //Aplicamos "Math"
    let suma = operando1 + operando2;
    output.innerHTML= suma;
}
function restar(operando1,operando2){//Funcion para restar
    operando1 = parseFloat(document.getElementById("operando1").value) ;
    operando2 = parseFloat(document.getElementById("operando2").value) ;

     output= document.getElementById("output");
    //Aplicamos "Math"
    let resta = operando1 - operando2;
    output.innerHTML= resta;
}

function multiplicar(operando1,operando2){//Funcion para multiplicar
    operando1 = parseFloat(document.getElementById("operando1").value) ;
    operando2 = parseFloat(document.getElementById("operando2").value) ;

     output= document.getElementById("output");
    //Aplicamos "Math"
    let mult = operando1 * operando2;
    output.innerHTML= mult;
}
function dividir(operando1,operando2){//Funcion para dividir
    operando1 = parseFloat(document.getElementById("operando1").value) ;
    operando2 = parseFloat(document.getElementById("operando2").value) ;

     output= document.getElementById("output");
    //Aplicamos "Math"
    let division = operando1 / operando2;
    output.innerHTML= division;
}

//Programamos la captación de valores decimales y sus funciones:
function entero(output){//Funcion para quedarme con la parte entera de un numero
   let numero= document.getElementById("output").innerHTML;
   
   numero= Math.floor(numero);

    document.getElementById("operando1").value=numero;
   


}

function decimal(output){//Funcion para quedarme con la parte decimal de un numero
    let numero= document.getElementById("output").innerHTML;
    numero="0."+ numero.toString().split(".")[1];
    
    
    document.getElementById("operando2").value=numero;
    
 
 
 }
//Programamos la activación de nuestras funciones al pulsar los botones:
document.getElementById("Sumar").onclick = function(){
    sumar(operando1,operando2);
}
document.getElementById("Restar").onclick = function(){
    restar(operando1,operando2);
}
document.getElementById("Multiplicar").onclick = function(){
    multiplicar(operando1,operando2);
}
document.getElementById("Dividir").onclick = function(){
    dividir(operando1,operando2);
}
document.getElementById("Parte Entera").onclick = function(){
    entero(output);
}
document.getElementById("Parte Decimal").onclick = function(){
    decimal(output);
}