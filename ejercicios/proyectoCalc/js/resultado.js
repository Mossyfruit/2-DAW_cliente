'use strict'
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
        case '':

            break;
        case '':

            break;
        case '':

            break;
        case '':

            break;
        case '':

            break;
        case '':

            break;
    }
}