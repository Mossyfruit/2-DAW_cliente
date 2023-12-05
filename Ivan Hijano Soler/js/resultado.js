'use strict'

/**
 * LEEAME
 * @author Mossfruit
 * 
 *      Para ver el proposito del proyecto y el indice, leer calc.js
 * 
 * Este archivo contiene una simple funcion con un switch que llama a la operacion adecuada al pulsar "=". Si se pulsase el mismo boton de operacion,
 * tambien se realizaria. 
 * */
function resultado(){
    separador(simbolo);
    console.log(simbolo);
    switch(simbolo){
        case '+':
            sumar();
            break;
        case '-':
            restar();
            break;
        case '*':
            multiplicar();
            break;
        case '/':
            dividir();


            break;
        case '+/-':
            cambiarSigno();


            break;
        case '1/x':
            fraccionDecimal();

            break;
        case '√':
            raizCuadrada();


            break;
        case '%':
            porcentaje();
            

            break;
        case 'R':
            rand();

            break;
        case '^':
            power();

            break;
        case '¨':
            power2();

            break;
        case 'n':
            ln();

            break;
        case 'l':
            log();

            break;
        case 'e':
            euler();

            break;
        case 'π':
            pi();
            break;
        case '!':
            fact();
            break;
        case 'r':
            modulo();
            break;
        case 's':
            seno();
            break;
        case 'c':
            coseno();
            break;
        case 't':
            tangente();
            break;

    }
}