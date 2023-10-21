'use strict'
/**
===================================                     ___  ___ _____  _____  _____ ______ ______  _   _  _____  _____ 
============================================           |  \/  ||  _  |/  ___|/  ___||  ___|| ___ \| | | ||_   _||_   _|            =============================================
============================================           | .  . || | | |\ `--. \ `--. | |_   | |_/ /| | | |  | |    | |               =======================================================
============================================           | |\/| || | | | `--. \ `--. \|  _|  |    / | | | |  | |    | |               =======================================================
============================================           | |  | |\ \_/ //\__/ //\__/ /| |    | |\ \ | |_| | _| |_   | |               =======================================================
===================================                    \_|  |_/ \___/ \____/ \____/ \_|    \_| \_| \___/  \___/   \_/              =============================================
                                                                
                



-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


El siguiente proyecto de Js busca recrear una calculadora, en dos formas: simple y cientifica. Poder cambiar de una a otra desde el index.html sin cambiar de página
No usaremos Eval() ya que buscamos demostrar nuestra capacidad con la programación procedimental.


                                                                    -PASOS A SEGUIR-
    1)
        Necesitaremos un proceso que reciba los botones de numeros recibidos y los guarde como "input1", y luego aplique una operación segun el operador seleccionado,
        a un segundo numero "input2". En pantalla aparecera "input1""operador""input2", y si:
            a) Seleccionamos otro operador
            b) Pulsamos "="
        Entonces se mostrara por pantalla el resultado de la operación.
        Si se pulsa otro operador, debera mostrar el resultado y guardarlo como "input1".

        Debemos impedir el uso de demasiados operadores seguidos (Syntax Error)
        Además de las diversas operaciones matematicas basicas, necesitaremos editores de memoria:
            M) Guarda el "input1" en "memoria". La proxima vez que se pulsase "M" saldria la memoria.
                OPCIONAL: crear modificadores M+, M-, MC para guardar o borrar en memoria.
            C) Elimina todos los numeros y memoria.
            CE) Borra las operaciones pero conserva el resultado. Basicamente, convertiria "input1""operador""input2" a "input1"
            <) Elimina un caracter del String compuesto por los inputs.

    2) 
        Necesitaremos reconocer si hay input alguno, si es incorrecto, y formas para modificarlo. Esto es, no podemos provocar la operación de la siguiente forma:
        input1= 2
        operador= +
        input2= 2
        >>Primero se recoge input1, despues se presiona operador.
        >>Se recoge input2.
        >>Le damos al operador de nuevo

        En pantalla saldra: 4
        Que pasa si ahora quiero borrar con <?
        En una calculadora normal, no se borra nada, ya que se considera que 4 es distinto de input. Incluso tras pulsar el operador de nuevo, < no lo eliminara.
        Esto significa que debemos separar lo que puede borrar < de lo que no, esto es, resultado debe ser INMUNE a <.

        Si la operacion se escribiera asi:
        2
        +
        +


        En pantalla tendria que salir: 2. Ya que no se ha introducido segundo input, la operación meramente no ocurre hasta que halla input2.
 */

//let input=document.getElementById("field").value;

/**
 * calc.js @author Mossfruit
 * 
 * En este archivo colocaremos los handlers de botones, que llamaran a las diversas funciones posteriores. Las funciones deben leer el value y replicarlo en un String,
 * para despues introducirselo a una funcion que:
 * 1) Recorra el string
 * 2) Separe numeros de operadores
 * 3) Guarde en memoria input1,
 * 4) Guarde en memoria operador,
 * 5) Si existe input1(Es distinto de 0), leer el siguiente value pulsado y guardarlo en memoria como input2
 * 6) Si existe input2, llamar a la funcion que elija la funcion matematica que corresponda al operador (switch)
 * 7) Devolver como resultado lo que devuelva la funcion matematica invocada por la funcion que las identifica.
 * 
 * Además, los MEMORY llamaran a funciones que trabajaran con el String, así que debemos guardarlo para su modificiación posterior.
 */



let cadena= document.getElementById("cadena").innerHTML;
let numM=0;
let numero='0';


//Recorremos la cadena y diferenciamos numeros de operadores en nuevos String

    

 



    


/////////////////////////////////////////////////STYLE\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
document.getElementById("selectorButton").addEventListener('change',function(){cambiaStyle()});

/////////////////////////////////////////////////NUMBERS\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
document.getElementById("0").onclick = function (){
    numero='0';
    escribeNumero(numero);

};

document.getElementById("1").onclick = function (){
   numero='1';
   escribeNumero(numero);

};

document.getElementById("2").onclick = function (){
    numero='2';
    escribeNumero(numero);
};

document.getElementById("3").onclick = function (){
    numero='3';
    escribeNumero(numero);

        
};

document.getElementById("4").onclick = function (){
    numero='4';
    escribeNumero(numero);
};

document.getElementById("5").onclick = function (){
    numero='5';
    escribeNumero(numero);
};

document.getElementById("6").onclick = function (){
    numero='6';
    escribeNumero(numero);
};

document.getElementById("7").onclick = function (){
    numero='7';
    escribeNumero(numero);
};

document.getElementById("8").onclick = function (){
    numero='8';
    escribeNumero(numero);
};

document.getElementById("9").onclick = function (){
    numero='9';
    escribeNumero(numero);
};


/////////////////////////////////////////////////OPERATORS\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

document.getElementById("+").onclick = function(){sumar()};


document.getElementById("-").onclick = function (){restar()};


document.getElementById("*").onclick = function (){multiplicar()};



document.getElementById("/").onclick = function (){dividir()};


document.getElementById("+/-").onclick = function (){cambiarSigno()};


document.getElementById(".").onclick = function (){
    numero='.';
    escribeNumero(numero);
};

document.getElementById("1/x").onclick = function (){fraccionDecimal()};

document.getElementById("√").onclick = function (){ raizCuadrada()};


document.getElementById("%").onclick = function (){porcentaje()};

document.getElementById("=").onclick = function (){resultado()};

/////////////////////////////////////////////////////MEMORY\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

document.getElementById("M").onclick = function (){memoriaM()};

document.getElementById("C").onclick = function (){memoriaC()};

document.getElementById("CE").onclick = function (){memoriaCE()};

document.getElementById("<").onclick = function (){memoriaUndo()};
