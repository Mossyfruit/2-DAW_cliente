'use strict'
//piedra papel o tijeras
let playerScore = 0; 
let computerScore = 0; 
let moves = 0; 
let playerMove;
let computerMove;
window.onload=mostrarResultado(playerScore,computerScore);
document.getElementById("piedra").onclick= function() {
    playerMove = "Piedra";
   partida(playerMove);
   
}
document.getElementById("papel").onclick= function(){
    playerMove="Papel"
    partida(playerMove)
    
}
document.getElementById("tijeras").onclick=function(){
    playerMove="Tijera"
    partida(playerMove)
}
//lagarto
document.getElementById("lagarto").onclick= function(){
    playerMove ="Lagarto"
    partida(playerMove)
}
document.getElementById("spock").onclick= function(){
    playerMove ="Spock"
    partida(playerMove)
}
