'use strict'
/**
 * LEEAME
 * @author Mossfruit
 * 
 *      Para ver el proposito del proyecto y el indice, leer calc.js
 * 
 * 
 * En este documento .js se encuentran la mayoria de operaciones que hallamos en un calculadora cientifica.
 *  */

/*function round(){// No me quedo claro si era Random o Round asi que aqui esta Round, y sin comentar, Random,
    simbolo='R';
    cadena+=simbolo;
    separador(simbolo);
    if(num1>=0){
        cadena=Math.round(num1);
        document.getElementById("cadena").innerHTML=cadena;
        cadena=document.getElementById("cadena").innerHTML;
        console.log(cadena);
        }else{
            alert('No se puede realizar la operación con un número negativo');
            }
            }*/
function rand(){// No me quedo claro si era Random o Round asi que aqui esta Round, y sin comentar, Random,
simbolo='R';
cadena+=simbolo;
console.log("Numero aleatorio:")
separador(simbolo);
cadena=Math.random();
document.getElementById("cadena").innerHTML=cadena;
        cadena=document.getElementById("cadena").innerHTML;
        console.log(cadena);

}
function power(){// Esta funcion nos hara la potencia del primer numero en cadena:
    simbolo='^';
    cadena+=simbolo;
    
    separador(simbolo);
    console.log("potencia de "+num1+" elevado a "+num2);
    if(num2!==NaN && num2!==0){//No podemos elevar a NaN. Elevar a 0 da 1.
        if(num1===0){//0^X = 0
            cadena=0;
        }else{//Calculamos la potencia con Math.pow
            cadena=Math.pow(num1,num2);
            document.getElementById("cadena").innerHTML=cadena;
            cadena=document.getElementById("cadena").innerHTML;//Actualizamos el HTML.
            console.log(cadena);

        }
    }
}
function power2(){//Misma funcion que arriba, pero la potencia siempre sera 2. Aunque no esta descrito asi en el ejemplo que se nos dio, 
    //Las calculadoras cientificas no traen "2 elevado a X", sino "x elevado a 2"
    
    simbolo='¨';
    cadena+=simbolo;
    separador(simbolo);
    if(num1===0){//x^0=0
        cadena=0;
    }else{
        cadena=Math.pow(num1,2);//Elevamos a potencia 2
        document.getElementById("cadena").innerHTML=cadena;
        cadena=document.getElementById("cadena").innerHTML;
        console.log(cadena);

    }
}

function euler(){//Cambiamos cadena por el numero de euler.
    simbolo='e';
    cadena=Math.E;//Funcion Math que devuelve el numero e
    document.getElementById("cadena").innerHTML=cadena;
    cadena=document.getElementById("cadena").innerHTML;
    console.log(cadena);

    

}

function pi(){//Cambiamos cadena por el numero pi
    simbolo='π';
    cadena=Math.PI;
    document.getElementById("cadena").innerHTML=cadena;
    cadena=document.getElementById("cadena").innerHTML;
    console.log(cadena);

}

function fact() {// Algo de chicha.
    simbolo='!'
    cadena+='!'
    console.log("factorizaremos: ")
    separador(simbolo);
    console.log(cadena)
    console.log(num1);
    num2=0;
    //Factorizar (5!=X) es multiplicar el numero por cada valor anterior entero positivo. En el ejemplo dado, 5!=1*2*3*4*5
    if (num1===0){//Si numero es 0, dara 1. El minimo valor viable de una factorizacion es 1. Bonaccelli se llamaba?
        cadena=1;
        document.getElementById("cadena").innerHTML=cadena;
        cadena=document.getElementById("cadena").innerHTML;
        console.log(cadena);
    }else if(num1<0){//Impedir que el usuario introduzca un valor no valido en la operacion
        alert('No se puede calcular el factorial de un número negativo');
    }else{//Por:
        for (let i = num1 - 1; i >= 1; i--) {//Cada numero desde num1 hasta 0,
            num1 *= i;//Lo multiplicamos y concatenamos con num1
            console.log(num1);
          }
        cadena=num1;//Lo mandamos a cadena y cambiamos el html:
        document.getElementById("cadena").innerHTML=cadena;
        cadena=document.getElementById("cadena").innerHTML;
        console.log(cadena);
    }

}


function log(){//Simple, hacemos un logaritmo del num1.
    simbolo='l'
    cadena+=simbolo;
    separador(simbolo);
    console.log("calculando logaritmo");
    console.log(cadena)
    console.log(num1);
    num2=0;//ya que no se usara, lo "limpiamos" de la memoria
    num1=Math.log10(num1);//Los logaritmos de log son en base 10.
    cadena=num1;//Transformamos cadena, cambiamos html5.
    document.getElementById("cadena").innerHTML=cadena;
    cadena=document.getElementById("cadena").innerHTML;
    console.log(cadena);


}
function ln(){//Los logaritmos neperianos se hacen en base e
    simbolo='n'
    cadena+=simbolo;
    separador(simbolo);
    console.log("calculando logaritmo natural o neperiano");
    console.log(cadena)
    console.log(num1);
    num2=0;//No se usa
    num1=Math.log(num1);//log en math es ln
    cadena=num1;//Misma operacion de cambiar e introducir
    document.getElementById("cadena").innerHTML=cadena;
    cadena=document.getElementById("cadena").innerHTML;
    console.log(cadena);


}

function modulo(){//Esta funcion es identica a la division, solo que nos devuelve el modulo o resto de la division en vez del resultado.
    simbolo='r'
    cadena+=simbolo;
    separador(simbolo);
    console.log(cadena)
    if(num2!=NaN && num2!==0){//Es literalmente lo mismo que dividir(), pero con la operacion siendo num1%num2
        cadena= num1%num2;
        document.getElementById("cadena").innerHTML=cadena;
        cadena=document.getElementById("cadena").innerHTML;
        cadena+='r';
        console.log(cadena);
        }
}


function seno(){//Math contiene utiles para hacer operaciones trigonometricas. Por seguridad, le aplicaremos las reglas de las calculadoras convencionales y pondremos
    // el calculo pitgorico correcto: seno=num1*pi/180º
    simbolo='s'
    cadena+=simbolo;
    separador(simbolo);
    console.log("calculamos el seno");
    console.log(cadena);
    console.log(num1);
    num2=0;
    num1=Math.sin(num1*Math.PI/180);
    cadena=num1;
    document.getElementById("cadena").innerHTML=cadena;
    cadena=document.getElementById("cadena").innerHTML;
    console.log(cadena);

}

function coseno(){//Math contiene utiles para hacer operaciones trigonometricas. Por seguridad, le aplicaremos las reglas de las calculadoras convencionales y pondremos
    simbolo='c'
    cadena+=simbolo;
    separador(simbolo);
    console.log("calculamos la coseno");
    console.log(cadena)
    console.log(num1);
    num2=0;
    num1=Math.cos(num1*Math.PI/180);
    cadena=num1;
    document.getElementById("cadena").innerHTML=cadena;
    cadena=document.getElementById("cadena").innerHTML;
    console.log(cadena);
    }
    function tangente(){//Math contiene utiles para hacer operaciones trigonometricas. Por seguridad, le aplicaremos las reglas de las calculadoras convencionales y pondremos
        simbolo='t'
        cadena+=simbolo;
        separador(simbolo);
        console.log("calculamos la tangente");
        console.log(cadena)
        console.log(num1);
        num2=0;
        num1=Math.tan(num1*Math.PI/180);
        cadena=num1;
        document.getElementById("cadena").innerHTML=cadena;
        cadena=document.getElementById("cadena").innerHTML;
        console.log(cadena);
        }
