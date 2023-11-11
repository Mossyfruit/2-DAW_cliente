'use strict'

function resultadoPartido(){
    //Determinamos 1,2 o X aleatoriamente:
    resultado=Math.floor(Math.random()*(3-1+1)+1);
    let resultadoFinal;
    switch(resultado){
        case 1:
        resultadoFinal='X';
            break;
        case 2:
            resultadoFinal='2';
            break;
        case 3:
            resultadoFinal='1';
            break;
    }
    console.log(resultadoFinal);
    return resultadoFinal;

    
   
}
//Repetimos la funcion anterior pero dandole más peso a 1
function resultadoPartidoPeso1(){
    //Determinamos 1,2 o X aleatoriamente:
    resultado=Math.floor(Math.random()*(5-1+1)+1);
    let resultadoFinal;
    switch(resultado){
        case 1:
        resultadoFinal='1';
            break;
        case 2:
            resultadoFinal='2';
            break;
        case 3:
            resultadoFinal='X';
            break;
        case 4:
            resultadoFinal='1';
            break;
        case 5:
            resultadoFinal='1';
            break;

        default:
            resultadoFinal='0';
            break;
            
    }
    console.log(resultadoFinal);
    return resultadoFinal;

    
   
}
