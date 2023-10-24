'use strict'
/**
 * LEEAME
 * @author Mossfruit
 * 
 *      Para ver el proposito del proyecto y el indice, leer calc.js
 * 
 * 
 * En esta funcion leemos si ha cambiado el selectorButton, y de haberlo hecho, cambiamos las clases de los botones de operaciones de
 * calculadora cientifica y el tamaño de la calculadora para poder acomodarlos
 *  */

function cambiaStyle(){
    let style=document.getElementById("selectorButton");//Leemos el selector
    style=style.value;//Leemos lo seleccionado,
    console.log(style);
    if (style=="basica") {//Si la seleccion es "basica"
       let botonMostrar= document.querySelectorAll(".science");//Recogemos todos los botones cientificos mostrandose,
       console.log(botonMostrar);
        for(let i of botonMostrar){//Y por cada uno, le quitamos su clase y añadimos otra con display:none
            i.classList.add('removeScience');
            i.classList.remove('science');
        }
        
        document.getElementById("calc").style.width = "450px";//Cambiamos el tamaño de la calculadora
    }else if(style=="cientifica"){//Si la seleccion es "cientifica"
        let botonMostrar= document.querySelectorAll(".removeScience");//Recogemos todos los botones cientificos NO mostrados,
       console.log(botonMostrar);
        for(let i of botonMostrar){//Y por cada uno le quitamos su clase y añadimos otra con display:block
            i.classList.add('science');
            i.classList.remove('removeScience');
        }
        document.getElementById("calc").style.width = "600px";//Cambiamos el tamaño de la calculadora
    }
}
