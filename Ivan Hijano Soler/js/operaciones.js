'use strict'

/**
 * LEEAME
 * @author Mossfruit
 * 
 *      Para ver el proposito del proyecto y el indice, leer calc.js
 * 
 * 
 * En este documento .js se encuentran la mayoria de operaciones. Las cientificas estan en science.js
 *  */

//Inicilizamos num1, num2 (operandos) y simbolo (operador)
let num1=0;
let num2=0;

let simbolo;
function sumar(){ //Suma! escribe + en la cadena
    simbolo='+';
    cadena+=simbolo;
   
    console.log(cadena);
    separador(simbolo);
    console.log("sumamos");
    console.log(num1);
if(num2!=NaN){//Si no existe num2
    if(num1!==0){//Si num1 no es 0
        
            console.log("case A: Solo num1");
           
            cadena= num1+num2;//Hacemos la suma de num1+0
            document.getElementById("cadena").innerHTML=cadena;
            cadena=document.getElementById("cadena").innerHTML;//Alteramos el html,
            cadena+='+';//Y le añadimos el +!
      
            
    }else{  //Num1 es 0
            console.log("case B");
            num1=0;
            cadena+='+';
            cadena= num1+num2;//Sumamos 0+Num2
            
            document.getElementById("cadena").innerHTML=cadena;
            cadena=document.getElementById("cadena").innerHTML;//Alteramos el html,
                    }
                }//Si no existe num2, la suma no se realiza, y se para la funcion hasta su proxima llamada
}

/**
 * Restar es considerablemente mas complejo que sumar por que tenemos que tener en cuenta la posibilidad de 
 * restarle a 0, que ha podido ser obtenido como NaN en una operacion anterior (2-2).
 * Ademas, debemos pensar en si estamos restando numeros positivos, negativos, o mixtos.
 */
function restar(){ //Escribimos - en la cadena
    simbolo='-';
    cadena+=simbolo;
    separador(simbolo);
    console.log("restamos:");
    console.log(num1);

        if(num2!=NaN && num2>0 && num1!=0){//Si num2 es mayor que 0, y num1 distinto de 0,
            console.log("case D: Resta simple");
            cadena= num1-num2;//Resta simple
            
            document.getElementById("cadena").innerHTML=cadena;
            cadena=document.getElementById("cadena").innerHTML;//Alteramos el html,
            
            cadena+='-';//Y añadimos un -
            console.log(cadena);
        }else if(num2!=NaN && num2<0 && num1!=0){//Si num2 es negativo y num1 distinto de 0,
            console.log("case C: Segundo operador negativo");
          
            cadena= num1+num2;//Se suman!! Por que 1+(-2)=-1
           
            document.getElementById("cadena").innerHTML=cadena;//Alteramos el html,
            cadena=document.getElementById("cadena").innerHTML;
           
            cadena+='-';//Y añadimos un -
            console.log(cadena);
        }else if(num2!=NaN && num2>0 && num1==0){//Y si num1 es 0?
            console.log("case A: Num1 es 0");
            cadena= num1-num2;//Una resta simple,
            document.getElementById("cadena").innerHTML=cadena;//A la que NO añadimos un -
            cadena=document.getElementById("cadena").innerHTML;
            

        }else if(num2!=NaN && num2<0 && num1==0){//Mismo caso que arriba, pero 2 es negativo
            console.log("case B");
            cadena= num1+num2;//Se suman!! Por que 1+(-2)=-1
           
            document.getElementById("cadena").innerHTML=cadena;//A la que NO añadimos un -
            cadena=document.getElementById("cadena").innerHTML;
        }
                        }
                    

function multiplicar(){//¡Ya esta fuera lo más complicado! Ahora a multiplicar:
    simbolo='*';
    cadena+=simbolo;//Añadimos el simbolo de multiplicacion
    console.log("multiplicamos");
    console.log(cadena);

    separador(simbolo);
    console.log(num1);
    console.log("x")
    console.log(num2);
             if(num2!=NaN && num2!==0){//Si num2 no es 0 (ya que X*0 seria 0)
                cadena= num1*num2;//Se realiza la multiplicacion
                document.getElementById("cadena").innerHTML=cadena;//Actualizamos la cadena como siempre,
                cadena=document.getElementById("cadena").innerHTML;
                cadena+='*';//Y le añadimos el *.
                console.log(cadena);
                }
                

}
function dividir(){//Igual que multiplicar, pero cambiando el simbolo:
    simbolo='/';
    cadena+=simbolo;
    console.log("dividimos")
    separador(simbolo);
    console.log(num1);
    console.log("/")
    console.log(num2);
            if(num2!=NaN && num2!==0){
                cadena= num1/num2;
                document.getElementById("cadena").innerHTML=cadena;
                cadena=document.getElementById("cadena").innerHTML;
                cadena+='/';
                console.log(cadena);
                }
                }


function cambiarSigno(){//Otra sencillita. Solo tenemos que revisar si num1 es 0, y entonces operar con num2, o con normalidad
    simbolo='+/-';
    cadena+=simbolo;
    console.log("Invertimos el numero");
    separador(simbolo);
    if(num1===0 || num1===NaN){//Si num1 es 0, como en 0-33=-33

    cadena=num2*-1;//Invertimos num2
    document.getElementById("cadena").innerHTML=cadena;
    cadena=document.getElementById("cadena").innerHTML;
    console.log(cadena);
    }else{//pero si existe num1, solo operamos en num1.
        cadena=num1*-1;
    document.getElementById("cadena").innerHTML=cadena;
    cadena=document.getElementById("cadena").innerHTML;
    console.log(cadena);

    }
}

function fraccionDecimal(){//Hora de dividir 1 entre nuestro valor.
    simbolo='1/x';
    cadena+=simbolo;
    console.log("Dividiendo 1 por "+num1)
    separador(simbolo);
    if(num1===0){//X/0=0
        cadena=0
    }else{// 1/num1=Y
        cadena=1/num1;
        document.getElementById("cadena").innerHTML=cadena;
        cadena=document.getElementById("cadena").innerHTML;
        console.log(cadena);

    }
}

function raizCuadrada(){//Y por fin usaremos Math.
    simbolo='√';
    cadena+=simbolo;
    console.log("Calculando la raiz cuadrada de "+num1)
    separador(simbolo);
    if(num1>=0){
        cadena=Math.sqrt(num1);
        document.getElementById("cadena").innerHTML=cadena;
        cadena=document.getElementById("cadena").innerHTML;
        console.log(cadena);
        }else{//No me gustan los alert pero es la unica forma de informar al usuario sin bloquear el programa y no proceder con la operacion.
            alert('No se puede realizar la operación con un número negativo');
            }
            }

function porcentaje(){//Una operacion sencillita donde:
    simbolo='%';
    cadena+=simbolo;
    console.log("Multiplicando el porcentaje de "+num1+" por "+num2)
    separador(simbolo);
    if(num2!=NaN && num2!==0){
        cadena=(num1/num2)*100;// El porcentaje Z de X con respecto a Y sera X/Y*100=Z
        document.getElementById("cadena").innerHTML=cadena+' %';
        cadena=document.getElementById("cadena").innerHTML;
        console.log(cadena);

    }
}

