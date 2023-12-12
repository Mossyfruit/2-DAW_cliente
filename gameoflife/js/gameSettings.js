'use strict'
/**
 * Initial values for our game of life
 */
const initialGridSize = {rows: 50, columns: 50};
let gridRows = initialGridSize.rows;
let gridColumns = initialGridSize.columns;
const canvas=document.getElementById("gameoflife");
let ctx=canvas.getContext("2d");
let interval=0;
let running=false;
canvas.width=800;
canvas.height=600;


document.getElementById("Start").addEventListener('click', function(){
    
    if(!running){
    interval =
    setInterval(updateGrid,900);

    running=true;
    }
})

document.getElementById("Stop").addEventListener('click', function(){
    if(running){
        clearInterval(interval);
        running=false;
    }
})

document.getElementById("Restart").addEventListener('click', function(){
    clearInterval(interval);
    createGrid();
    drawGrid();
    running=false;
})

let grid = new Array(gridColumns);

function createGrid(){
    for(let i=0;i < grid.length; i++){

        grid[i] = new Array(gridRows).fill(0);

        for(let j=0;j < grid[i].length; j++){

            grid[i][j]= Math.random() > 0.8?1 : 0; //20% chance of spawning alive
        }
    }
}
createGrid();


function drawGrid(){
    for (let i = 0; i < gridColumns; i++) {
        for (let j = 0; j < gridRows; j++) {
            if (grid[i][j] === 1) {
                ctx.fillStyle = 'purple'; 
               
                ctx.fillRect(i * 10, j * 10, 10, 10); 
                
               
                
                } else {
                ctx.fillStyle = 'white'; 
            
                ctx.fillRect(i * 10, j * 10, 10, 10);
                
               
                
                }
        ctx.strokeRect(i * 10, j * 10, 10, 10);
        }
        }
}
