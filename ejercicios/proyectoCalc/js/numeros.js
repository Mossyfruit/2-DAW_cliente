'use strict'
/**
 * LEEAME
 * @author Mossfruit
 * 
 *      Para ver el proposito del proyecto y el indice, leer calc.js
 * 
 *  En este archivo tenemos la funcion escribeNumero(), que sencillamente recoge el numero introducido y lo introduce a la cadena.
 *  Si la cadena ya es 0, en vez de añadir otro numero (02) lo transforma en el numero pulsado (2)
 *  Si la cadena no es 0, sencillamente añade al final el nuevo numero pulsado.
 * */
function escribeNumero(numero){
    if (cadena==="0") {//Cadena es 0
    cadena=numero;//Cadena es numero
    //Transformamos la cadena en el html
    console.log(cadena);
    document.getElementById("cadena").innerHTML=cadena;
    
}else{//La cadena es un numero distinto de 0
cadena +=numero;//Pues lo añadimos.

console.log(cadena);
 //Transformamos la cadena en el html
document.getElementById("cadena").innerHTML=cadena;
}
}