'use strict'
//Leemos la cadena de los botones pulsados en index.html

let num1=0;
let num2=0;
let result=0;
let simbolo;
function sumar(){ 
    simbolo='+';
    if(!cadena.includes(simbolo,0)){
    
    simbolos();
    console.log("Se ha completado simbolos");
    
} else{
    separador(simbolo);
    console.log(num1);

    if(num1!==0){
            if(num2!=NaN){
            cadena= num1+num2;
            document.getElementById("cadena").innerHTML=cadena;
            cadena=document.getElementById("cadena").innerHTML;
            cadena+='+';
            }
    }else{
            num1=0;
            cadena= num1+num2;
            document.getElementById("cadena").innerHTML=cadena;
            cadena=document.getElementById("cadena").innerHTML;
                    }
                }
                }

function restar(){ 
    simbolo='-';
    if(!cadena.includes(simbolo,0)){
    
    simbolos();
    console.log("Se ha completado simbolos");
    

    
    }else{
            separador(simbolo);
            console.log(num1);

        if(num2!=NaN && num2>0 && num1!=0){
            console.log("case D");
            cadena= num1-num2;
            
            document.getElementById("cadena").innerHTML=cadena;
            cadena=document.getElementById("cadena").innerHTML;
            
            cadena+='-';
            console.log(cadena);
        }else if(num2!=NaN && num2<0 && num1!=0){
            console.log("case C");
          
            cadena= num1+num2;
           
            document.getElementById("cadena").innerHTML=cadena;
            cadena=document.getElementById("cadena").innerHTML;
           
            cadena+='-';
            console.log(cadena);
        }else if(num2!=NaN && num2>0 && num1==0){
            console.log("case A");
            cadena= num1-num2;
            document.getElementById("cadena").innerHTML=cadena;
            cadena=document.getElementById("cadena").innerHTML;
            

        }else if(num2!=NaN && num2<0 && num1==0){
            console.log("case B");
            cadena= num1+num2;
           
            document.getElementById("cadena").innerHTML=cadena;
            cadena=document.getElementById("cadena").innerHTML;
        }
                        }
                    }

function multiplicar(){
    simbolo='*';

    if(!cadena.includes(simbolo,0)){
        simbolos();
        console.log("Se ha completado simbolos");
        }else{
            separador(simbolo);
            console.log(num1);
            if(num2!=NaN){
                cadena= num1*num2;
                document.getElementById("cadena").innerHTML=cadena;
                cadena=document.getElementById("cadena").innerHTML;
                cadena+='*';
                console.log(cadena);
                }
                }

}
function dividir(){
    simbolo='/';

    if(!cadena.includes(simbolo,0)){
        simbolos();
        console.log("Se ha completado simbolos");
        }else{
            separador(simbolo);
            console.log(num1);
            if(num2!=NaN){
                cadena= num1/num2;
                document.getElementById("cadena").innerHTML=cadena;
                cadena=document.getElementById("cadena").innerHTML;
                cadena+='/';
                console.log(cadena);
                }
                }

}
function cambiarSigno(){
    simbolo='+/-';

    if(!cadena.includes(simbolo,0)){
        simbolos();
        console.log("Se ha completado simbolos");
        }else{
            separador(simbolo);
            console.log(num1);
            if(num2!=NaN){
                cadena= num1/num2;
                document.getElementById("cadena").innerHTML=cadena;
                cadena=document.getElementById("cadena").innerHTML;
                cadena+='/';
                console.log(cadena);
                }
                }

}