'use strict'
//Leemos la cadena de los botones pulsados en index.html

let num1=0;
let num2=0;

let simbolo;
function sumar(){ 
    simbolo='+';
    cadena+=simbolo;
   
    console.log(cadena);
    separador(simbolo);
    console.log("sumamos");
    console.log(num1);
if(num2!=NaN){
    if(num1!==0){
        
            console.log("case A");
           
            cadena= num1+num2;
            document.getElementById("cadena").innerHTML=cadena;
            cadena=document.getElementById("cadena").innerHTML;
            cadena+='+';
      
            
    }else{  
            console.log("case B");
            num1=0;
            cadena+='+';
            cadena= num1+num2;
            
            document.getElementById("cadena").innerHTML=cadena;
            cadena=document.getElementById("cadena").innerHTML;
                    }
                }
                }

function restar(){ 
    simbolo='-';
    cadena+=simbolo;
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
                    

function multiplicar(){
    simbolo='*';
    cadena+=simbolo;
    console.log("multiplicamos");
    console.log(cadena);
            separador(simbolo);
            console.log(num1);
            console.log(num2);
            if(num2!=NaN && num2!==0){
                cadena= num1*num2;
                document.getElementById("cadena").innerHTML=cadena;
                cadena=document.getElementById("cadena").innerHTML;
                cadena+='*';
                console.log(cadena);
                }
                

}
function dividir(){
    simbolo='/';
    cadena+=simbolo;
    
            separador(simbolo);
            console.log(num1);
            if(num2!=NaN && num2!==0){
                cadena= num1/num2;
                document.getElementById("cadena").innerHTML=cadena;
                cadena=document.getElementById("cadena").innerHTML;
                cadena+='/';
                console.log(cadena);
                }
                }


function cambiarSigno(){
    simbolo='+/-';
    cadena+=simbolo;
    separador(simbolo);
    if(num1===0 || num1===NaN){

    cadena=num2*-1;
    document.getElementById("cadena").innerHTML=cadena;
    cadena=document.getElementById("cadena").innerHTML;
    console.log(cadena);
    }else{
        cadena=num1*-1;
    document.getElementById("cadena").innerHTML=cadena;
    cadena=document.getElementById("cadena").innerHTML;
    console.log(cadena);

    }
}

function fraccionDecimal(){
    simbolo='1/x';
    cadena+=simbolo;
    separador(simbolo);
    if(num1===0){
        cadena=0
    }else{
        cadena=1/num1;
        document.getElementById("cadena").innerHTML=cadena;
        cadena=document.getElementById("cadena").innerHTML;
        console.log(cadena);

    }
}

function raizCuadrada(){
    simbolo='√';
    cadena+=simbolo;
    separador(simbolo);
    if(num1>=0){
        cadena=Math.sqrt(num1);
        document.getElementById("cadena").innerHTML=cadena;
        cadena=document.getElementById("cadena").innerHTML;
        console.log(cadena);
        }else{
            alert('No se puede realizar la operación con un número negativo');
            }
            }

function porcentaje(){
    simbolo='%';
    cadena+=simbolo;
    separador(simbolo);
    if(num2!=NaN && num2!==0){
        cadena=(num1/num2)*100;
        document.getElementById("cadena").innerHTML=cadena+' %';
        cadena=document.getElementById("cadena").innerHTML;
        console.log(cadena);

    }
}

