'use strict'
//funcion para crear caracteres aleatorios en una matriz
let quiniela = [];
let resultado;
let acumulado="";
let times=10;
let partidoResultado;
//Añadimos los equipos
quiniela.push('Real Madrid');
quiniela.push('Barcelona');
quiniela.push('Atlético de Madrid');
quiniela.push('Valencia CF');
quiniela.push('Granada CF');
quiniela.push('Sevilla FC');
quiniela.push('Rayo Vallecano');
quiniela.push('Eibar');
quiniela.push('Osasuna');
quiniela.push('Villarreal CF');
document.getElementById("generar").onclick= function(){
    
    
    
    mostrarResultado(times);
    console.log(quiniela);
}

document.getElementById("generarP").onclick= function(){
    
    
    
    mostrarResultadoP(times);
    console.log(quiniela);
}



