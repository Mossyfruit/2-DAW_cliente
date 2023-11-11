'use strict'
function partida(playerMove){
    let computerMoveChoice = Math.floor((Math.random() * 3) +1);
    switch (computerMoveChoice) {
        case 1:
            computerMove="Piedra"
            break;
        case 2:
            computerMove="Papel"
            break;
        case 3:
            computerMove="Tijera"
            break;
        case 4:
            computerMove="Lagarto";
            break;
        case 5:
            computerMove="Spock";
            break;
            
        default:
            break;
    }
    if (computerMove == playerMove) {
        console.log("Empate");
        
    } else if ((computerMove=="Piedra") && (playerMove=="Tijera")){
            document.getElementById("resultado").innerHTML="Ganaste!";
            playerScore++;
            
    }else if ((computerMove=="Papel") && (playerMove=="Piedra")){
            document.getElementById("resultado").innerHTML="Ganaste!";
            playerScore++;
    }else if ((computerMove=="Tijera") && (playerMove=="Papel")){
            document.getElementById("resultado").innerHTML="Ganaste!";
            playerScore++;
    }else if ((computerMove=="Lagarto") && (playerMove=="Spock")){
            document.getElementById("resultado").innerHTML="Ganaste!";
            playerScore++;
    }else if ((computerMove=="Spock") && (playerMove=="Lagarto")){
            document.getElementById("resultado").innerHTML="Ganaste!";
            playerScore++;
    }else if ((computerMove=="Piedra") && (playerMove=="Spock")){
            document.getElementById("resultado").innerHTML="Ganaste!";
            playerScore++;
    }else if ((computerMove=="Papel") && (playerMove=="Lagarto")){
            document.getElementById("resultado").innerHTML="Ganaste!";
            playerScore++;
}else if ((computerMove=="Tijera") && (playerMove=="Spock")){
            document.getElementById("resultado").innerHTML="Ganaste!";
            playerScore++;
            }else if ((computerMove=="Lagarto") && (playerMove=="Piedra")){
                document.getElementById("resultado").innerHTML="Ganaste!";
                playerScore++;
                }else if ((computerMove=="Spock") && (playerMove=="Papel")){
                    document.getElementById("resultado").innerHTML="Ganaste!";
                    playerScore++;

           

            }else{
                        document.getElementById("resultado").innerHTML="Perdiste!";
                        computerScore++;
                    }
    document.getElementById("resultado").innerHTML+=" La maquina eligio: "+computerMove;
    mostrarResultado(playerScore,computerScore);
}