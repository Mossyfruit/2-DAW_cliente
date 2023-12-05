'use strict'
/**
===================================                     ___  ___ _____  _____  _____ ______ ______  _   _  _____  _____ 
============================================           |  \/  ||  _  |/  ___|/  ___||  ___|| ___ \| | | ||_   _||_   _|            =============================================
============================================           | .  . || | | |\ `--. \ `--. | |_   | |_/ /| | | |  | |    | |               =======================================================
============================================           | |\/| || | | | `--. \ `--. \|  _|  |    / | | | |  | |    | |               =======================================================
============================================           | |  | |\ \_/ //\__/ //\__/ /| |    | |\ \ | |_| | _| |_   | |               =======================================================
===================================                    \_|  |_/ \___/ \____/ \____/ \_|    \_| \_| \___/  \___/   \_/              =============================================
                                                                
                



-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

@author Mossfruit
El siguiente proyecto de Js busca recrear una calculadora, en dos formas: simple y cientifica. Poder cambiar de una a otra desde el index.html sin cambiar de página
No usaremos Eval() ya que buscamos demostrar nuestra capacidad con la programación procedimental.
*/

/**
 * LEEME
 *                                              ----INDICIE DEL PROYECTO------
 * Este proyecto se divide en multiples archivos js que recogen las multiples funciones necesarias para el correcto funcionamiento del programa.
 * Los archivos y sus funciones son:
 *              calc.js)
 *                  Archivo donde se programan todos los inputs y se inicializan las variables necesarias. Este archivo se cargara el ULTIMO.
 *              cadena.js)
 *                  Archivo donde se programa la lectura y separacion del texto que aparece en pantalla (cadena) en numeros.
 *              numeros.js)
 *                  Archivo que recoge la funcion para escribir numeros en la cadena.
 *              operaciones.js)
 *                  Archivo que recoge los operadores que no son necesarios en una calculadora cientifica y sus funciones asociadas a cada uno.
 *              memoria.js)
 *                  Archivo que recoge las funciones que se dedican a alterar la "memoria" de la calculadora.
 *              science.js)
 *                  Archivo en el que se programan las funciones de operaciones de una calculadora cientifica
 *              cambiaStyle.js)
 *                  Archivo que contiene la funcion para cambiar de calculadora basica a cientifica.
 *              resultado.js)
 *                  Archivo que tiene la funcion "resultado" para operar la tecla "="
 */

let cadena= document.getElementById("cadena").innerHTML;
let numM=0;
let numero='0';


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
document.getElementById(".").onclick = function (){
    numero='.';
    escribeNumero(numero);
};

/////////////////////////////////////////////////OPERATORS\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

document.getElementById("+").onclick = function(){sumar()};


document.getElementById("-").onclick = function (){restar()};


document.getElementById("*").onclick = function (){multiplicar()};



document.getElementById("/").onclick = function (){dividir()};


document.getElementById("+/-").onclick = function (){cambiarSigno()};


document.getElementById("1/x").onclick = function (){fraccionDecimal()};

document.getElementById("√").onclick = function (){ raizCuadrada()};


document.getElementById("%").onclick = function (){porcentaje()};

document.getElementById("=").onclick = function (){resultado()};

/////////////////////////////////////////////////////MEMORY\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

document.getElementById("M").onclick = function (){memoriaM()};

document.getElementById("C").onclick = function (){memoriaC()};

document.getElementById("CE").onclick = function (){memoriaCE()};

document.getElementById("<").onclick = function (){memoriaUndo()};

/////////////////////////////////////////////////////SCIENCE\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

document.getElementById("Rnd").onclick = function (){rand()};

document.getElementById("a^b").onclick = function (){power()};

document.getElementById("a^2").onclick = function (){power2()};

document.getElementById("ln").onclick = function (){ln()};

document.getElementById("log").onclick = function (){log()};

document.getElementById("e").onclick = function (){euler()};

document.getElementById("π").onclick = function (){pi()};

document.getElementById("!").onclick = function (){fact()};

document.getElementById("mod").onclick = function (){modulo()};

document.getElementById("sen").onclick = function (){seno()};

document.getElementById("cos").onclick = function (){coseno()};

document.getElementById("tan").onclick = function (){tangente()};