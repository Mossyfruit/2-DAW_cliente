'use strict'

/**
 * In this document we program the rules of the game of life
 */
function updateGrid(){
    let nextGrid= grid.map(arr=>[...arr]);
    rulesOfNature(grid,nextGrid);
    grid=nextGrid;
    drawGrid();
}



function countLiveNeighbors(grid, gridRows, gridColumns){
    let liveNeighbors=0;
  
    const dirs=[[0,1], [1,1], [1,0], [0,0]];
    
    for(let i=0; i<grid.length;i++){
        for(let j=0; j<grid[i].length;j++){
            for(let dir of dirs){
            let r= gridRows + dir[0];
            let c= gridColumns + dir[1];

            if(r>=0 && r<gridRows && c >=0 && c <gridColumns){
                if(grid[r][c]===1){
                liveNeighbors++;
             }
            }
            }
        }
       
    }
  console.log(liveNeighbors);
    return liveNeighbors;

}

function rulesOfNature(grid,nextGrid){
    
    console.log(gridRows);
    console.log(gridColumns);
    for(let i=0; i<grid.length;i++){
        for(let j=0; j<grid[i].length;j++){
            let n=countLiveNeighbors(grid, i, j);
                if(grid[i][j]===1){
                    //RULES OF NATURE= HUNGER AND OVERPOPULATION
                    if(n<2 || n>3){
                        nextGrid[i][j]=0;
                    }else{
                        //RULES OF NATURE= SURVIVAL
                        nextGrid[i][j]=1;

                    }
                                             
                   
                }
                 if(grid[i][j]===0){
                    //RULES OF NATURE: REPRODUCTION
                    if(n===3){
                        nextGrid[i][j]=1;
                    }

                    }
        }
    }
}
