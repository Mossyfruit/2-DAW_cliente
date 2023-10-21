'use strict'
function separador(){
    //Separamos numeros de operadores
    let posFinal=-1;
    console.log("Cadena a separar:")
    console.log(cadena);
    if(simbolo==undefined || simbolo==''){
        console.log("No hay simbolo, por lo que cadena es:")
        console.log(cadena);
        cadena=parseFloat(cadena);
        num1=cadena;
        console.log("numero obtenido:")
        console.log(num1);

    }else{
        
    
    if(cadena.startsWith('-')){
        console.log("Empieza con -");
        num1=parseFloat(cadena.slice(cadena.indexOf('-',posFinal)+1));
        console.log(`el numero negativo primero es: ${num1}`);
        num1=num1*-1;
        console.log(num1);
        num2=parseFloat(cadena.slice(cadena.indexOf(simbolo)+1));
        console.log(num2);
        if(cadena.length<3){
            num2=0
        }else if(simbolo=='+'){
            
            
            console.log("Num2 sera sumado")
        }else{
            console.log("default");
        console.log(cadena.lastIndexOf(simbolo));
        num2=parseFloat(cadena.slice(cadena.indexOf(simbolo)+1))*-1;
        }
    }else{
        num1=parseFloat(cadena.slice(0,cadena.indexOf(simbolo,posFinal)));
        
        console.log(cadena.slice(cadena.indexOf(simbolo,posFinal)));
        num2=parseFloat(cadena.slice(cadena.indexOf(simbolo,posFinal)+1));}
    
    
    console.log("Los numeros sacados de la cadena son:");
    num1 = num1 ? num1 : 0;
    console.log(num1);
    num2 = num2 ? num2 : 0;
    console.log(num2);
    console.log("la operacion es:")
    console.log(simbolo);
    }
}

function simbolos(){
    console.log(`El simbolo introducido es ${simbolo}`);
    if(!cadena.includes(simbolo,0)){
        
        cadena +=simbolo;
        console.log(`la cadena con simbolo es: ${cadena}`);
        document.getElementById("cadena").innerHTML=cadena;
        console.log(cadena);
        
    }
}

