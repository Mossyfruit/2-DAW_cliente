'use strict'
//Leemos la cadena de los botones pulsados en index.html

let num1=0;
let num2=0;
let result=0;
let simbolo;
function sumar(){ 


    if(!cadena.includes("+",0)){
        simbolo='+';
        cadena +='+';
        console.log(cadena);
        parsearCadena(cadena);
        console.log(arrayNumeros)
        for(let i=0; i<arrayNumeros.length;i++){
            input1+=arrayNumeros[i]
        }
        input1=parseInt(input1);
        console.log(input1);
    }else{
            separador(simbolo);
        if(num2!=NaN){
            cadena= num1+num2;
            document.getElementById("cadena").innerHTML=cadena;
            cadena=document.getElementById("cadena").innerHTML;
            cadena+='+';
        }else{
            num2=0;
        }
                        }
                    }

function restar(){ 


    if(!cadena.includes("-",0)){
        simbolo='-';
        cadena +='-';
        console.log(cadena);
        parsearCadena(cadena);
        console.log(arrayNumeros)
        for(let i=0; i<arrayNumeros.length;i++){
            input1+=arrayNumeros[i]
        }
        input1=parseInt(input1);
        console.log(input1);
    }else{
            separador(simbolo);
        if(num2!=NaN){
            cadena= num1-num2;
            console.log(cadena);
            document.getElementById("cadena").innerHTML=cadena;
            cadena=document.getElementById("cadena").innerHTML;
            console.log(cadena);
            cadena+='-';
            console.log(cadena);
        }else if(num2<0){
            num2=0;
            
        }
                        }
                    }