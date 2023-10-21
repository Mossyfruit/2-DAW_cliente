'use strict'


/**
 * LEEAME
 * @author Mossfruit
 * 
 *      Para ver el proposito del proyecto y el indice, leer calc.js
 * 
 * En este archivo se recogen 2 funciones, una de ellas comentada.
 * La primera es separador(), que lee la cadena (texto en pantalla) de la calculadora y:
 *          Si no halla un operador (simbolo), devuelve cadena como num1
 *          Si halla un numero negativo (empiez por -), devuelve los numeros negativos adecuadamente
 *          Si halla un simbolo, separa los numeros antes y despues de dicho simbolo, y los introduce en num1 y num2 respectivamente.
 * 
 * 
 * Sera llamada por la inmensa mayoria de operaciones y funciones de este programa.
 * 
 * La segunda funcion esta comentada y es simbolos(), que sirve para hacer debugging y hallar errores. Descomentarla e introducirla en una funcion 
 * corroborara que simbolo fue introducido, y de no tenerlo, lo introducira en la cadena.
 * 
 */
function separador(){
    //Separamos numeros de operadores
    let posFinal=-1; //Final de la cadena
    console.log("Cadena a separar:")
    console.log(cadena);
    if(simbolo==undefined || simbolo==''){ //Si no hay simbolo,
        console.log("No hay simbolo, por lo que cadena es:")
        console.log(cadena);
        cadena=parseFloat(cadena);
        num1=cadena;//Solo consideramos cadena como numeros
        console.log("numero obtenido:")
        console.log(num1);

    }else{//Si existe simbolo,
        
    
    if(cadena.startsWith('-')){//Pero el primero es '-', debemos considerar que el numero 1 es negativo. Para permitir que el programa lo distinga:
        console.log("Empieza con -");
        num1=parseFloat(cadena.slice(cadena.indexOf('-',posFinal)+1));//ignoramos el primer '-' al separar la cadena con slice
        console.log(`el numero negativo primero es: ${num1}`);
        num1=num1*-1;//Al devolvernos un numero entero positivo, lo volvemos negativo de nuevo
        console.log(num1);
        num2=parseFloat(cadena.slice(cadena.indexOf(simbolo)+1));//Leemos segundo numero, de haberlo.
        console.log(num2);
        if(cadena.length<3){//Si no existe un segundo numero negativo
            num2=0
        }else if(simbolo=='+'){//Si existe otro numero, consideramos que sera sumado. Esto sirve para debugging.
            
            
            console.log("Num2 sera sumado")
        }else{//Caso por defecto en numero negativo
            console.log("default");
        console.log(cadena.lastIndexOf(simbolo));
        num2=parseFloat(cadena.slice(cadena.indexOf(simbolo)+1))*-1;//Leemos num2 mas alla del simbolo
        }
    }else{//Definimos donde estara el simbolo, y sacamos num1 de todo lo previo a el simbolo, y num2 de todo lo posterior al mismo
        num1=parseFloat(cadena.slice(0,cadena.indexOf(simbolo,posFinal)));
        
        console.log(cadena.slice(cadena.indexOf(simbolo,posFinal)));
        num2=parseFloat(cadena.slice(cadena.indexOf(simbolo,posFinal)+1));
    }
    
    //Si los numeros fueren NaN o 0, que sean 0. Ahorra problemas matematicos al operar.
    console.log("Los numeros sacados de la cadena son:");
    num1 = num1 ? num1 : 0;
    console.log(num1);
    num2 = num2 ? num2 : 0;
    console.log(num2);
    console.log("la operacion es:")
    console.log(simbolo);
    }
}

/*function simbolos(){
    console.log(`El simbolo introducido es ${simbolo}`);
    if(!cadena.includes(simbolo,0)){//Nos falta el simbolo?
        
        cadena +=simbolo;//Añadimos el simbolo que falta
        console.log(`la cadena con simbolo es: ${cadena}`);
        document.getElementById("cadena").innerHTML=cadena;
        console.log(cadena);
        
    }
}
*/
