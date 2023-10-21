'use strict'
function memoriaM(){
    console.log(cadena);
    if(numM===0){
        if(cadena==="0"){
            console.log("La cadena no tiene numeros como tal");
            cadena=numM;
        }else{
            separador(simbolo);
            if(simbolo!==undefined){
                console.log(num1);
                numM=num1;
                cadena=numM;
                document.getElementById("cadena").innerHTML=cadena;
                cadena=document.getElementById("cadena").innerHTML;
            }else{
                console.log(cadena);
                numM=parseFloat(cadena);

            }
        }
    }else{
        console.log("El numero guardado en la memoria es:");
        console.log(numM);
        cadena=numM;
        document.getElementById("cadena").innerHTML=cadena;
        cadena=document.getElementById("cadena").innerHTML;
    }
}



function memoriaC(){
    cadena='0';
    numM=0;
    simbolo='';
    console.log("Limpiada toda la memoria y cadena")
    document.getElementById("cadena").innerHTML=cadena;
    cadena=document.getElementById("cadena").innerHTML;
}

function memoriaCE(){
    console.log(cadena);
    separador(simbolo);
    console.log(simbolo);
    if(simbolo!==undefined && simbolo!==''){
        console.log(cadena);
        cadena=cadena.slice(0,cadena.indexOf(simbolo));
        console.log(cadena);
        simbolo='';
        console.log("limpiada la memoria y operaciones")
        document.getElementById("cadena").innerHTML=cadena;
        cadena=document.getElementById("cadena").innerHTML;
    }else{
        console.log(cadena);
        simbolo='';
        console.log("limpiada la memoria y operaciones")
        document.getElementById("cadena").innerHTML=cadena;
        cadena=document.getElementById("cadena").innerHTML;
    }
 
}

function memoriaUndo(){
    console.log(cadena);
    if(cadena==="0"){
        console.log("La cadena no tiene numeros como tal");
        cadena="0";
    }else{
        let posFinal=-1;
        cadena=cadena.slice(0,posFinal);
        document.getElementById("cadena").innerHTML=cadena;
        cadena=document.getElementById("cadena").innerHTML;
    }
}