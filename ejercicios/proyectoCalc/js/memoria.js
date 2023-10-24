'use strict'
/**
 * LEEAME
 * @author Mossfruit
 * 
 *      Para ver el proposito del proyecto y el indice, leer calc.js
 * 
 *  
 * Aquí tenemos las funciones referentes a memoria: guardarla, borrar todo, borrar solo la memoria y operaciones pero no los numeros, y finalmente,
 * borrar el ultimo char introducido en cadena.
 * */



/**
 *  memoriaM() va a revisar que si la memoria esta vacia, convierta la cadena en numM, y de ser numM distinto de 0, llamarlo a pantalla como 
 *  primer numero de la cadena.
 */
function memoriaM(){
    console.log("La cadena es:")
    console.log(cadena);
    if(numM===0){//Si numM es 0
        if(cadena==="0"){//y cadena tambien,
            console.log("La cadena no tiene numeros como tal");
            cadena=numM;
        }else{//pero cadena no,
            separador(simbolo);//Encontrmos el primer numero con separador()
            if(simbolo!==undefined){//Si no existe simbolo,
                console.log(num1);
                numM=num1;//Guardamos solo el primer valor, esto es, la cadena.
                cadena=numM;//Procedemos a mostrarlo por pantalla:
                document.getElementById("cadena").innerHTML=cadena;
                cadena=document.getElementById("cadena").innerHTML;
            }else{//Si existe simbolo,
                console.log(cadena);
                numM=parseFloat(cadena);//Solo nos cogera el primer numero de la cadena.

            }
        }
    }else{//Si numM != 0,
        console.log("El numero guardado en la memoria es:");
        console.log(numM);
        cadena=numM;//Recuperamos numM y lo establecemos como cadena:
        document.getElementById("cadena").innerHTML=cadena;
        cadena=document.getElementById("cadena").innerHTML;
    }
}


/**
 *  memoriaC() va a borrar TODOS los datos guardados referentes a num1, num2, cadena, simbolo y numM.
 */
function memoriaC(){
    cadena='0';//Borramos cadena
    numM=0;//Borramos memoria
    simbolo='';//Borramos el simbolo
    console.log("Limpiada toda la memoria y cadena")
    document.getElementById("cadena").innerHTML=cadena;//Reescribimos 0 en la cadena
    cadena=document.getElementById("cadena").innerHTML;
}

/**
 * memoriaCE() no borrara toda la informacion, sino todo aquello que no sea num1.
 */
function memoriaCE(){
    console.log("Leemos la cadena")
    console.log(cadena);
    separador(simbolo);//Localizmos simbolos
    console.log(simbolo);
    if(simbolo!==undefined && simbolo!==''){//De  haber simbolo,
        console.log("La cadena es:");
        console.log(cadena);
        cadena=cadena.slice(0,cadena.indexOf(simbolo));//Seleccionamos todo aquello antes del simbolo como cadena
        console.log("Nueva Cadena:");
        console.log(cadena);
        simbolo='';//Borramos el simbolo
        console.log("limpiada la memoria y operaciones");
        document.getElementById("cadena").innerHTML=cadena;//Reescribimos 0 en la cadena
        cadena=document.getElementById("cadena").innerHTML;
    }else{//Si no lo hay,
        console.log("No existen operadores o simbolos.");
        console.log("La cadena es:")
        console.log(cadena);
        simbolo='';//Borramos simbolo (Ahorra fallos tras multiples operaciones)
        console.log("limpiada la memoria y operaciones")
        document.getElementById("cadena").innerHTML=cadena;//Reescribimos 0 en la cadena
        cadena=document.getElementById("cadena").innerHTML;
    }
 
}
/**
 * memoriaUndo() es... un eliminador del ultimo caracter de la cadena. Si la cadena y es 0, la convierte en 0.
 */
function memoriaUndo(){
    console.log("La cadena es:")
    console.log(cadena);
    if(cadena==="0"){//Si cadena es 0, no hay que hacer nada, pero para evitar fallos de operaciones anteriores, nos devuelve 0 en cadena.
        console.log("La cadena no tiene numeros como tal");
        cadena="0";
    }else{// Si cadena no es cero, nos quit l ultima posicion.
        let posFinal=-1;//Ultima posicion en cadena
        cadena=cadena.slice(0,posFinal);//Cadena antes de dicha posicion
        document.getElementById("cadena").innerHTML=cadena;//Reescribimos 0 en la cadena
        cadena=document.getElementById("cadena").innerHTML;
    }
    console.log("Se ha realizado un undo");
}