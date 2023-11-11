'use strict'
//Creamos un array para contener nuestra quiniela


//A continuación, los enfrentamos aleatoriamente
function partido(quiniela){
    let equipo1=Math.floor(Math.random() * (quiniela.length - 0) + 0);
    let equipo2=Math.floor(Math.random() * (quiniela.length - 0) + 0);
    console.log(`El primer partido es entre ${quiniela[equipo1]} y ${quiniela[equipo2]}`);
    partidoResultado=`${quiniela[equipo1]} vs ${quiniela[equipo2]} =`;
    
    return partidoResultado;
}


