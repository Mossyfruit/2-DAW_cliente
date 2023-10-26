'use strict'
/**
 * @author Mossfruit
 * 
 * Esta función toma el alto y ancho del visor, recoge el valor introducido por el usuario y transforma el css de los elementos visor, imagenSaliente e imagenEntrante.
 */
let alto=document.getElementById("visor").clientHeight;//Alto del visor

let ancho=document.getElementById("visor").clientWidth;//Ancho del visor

function cambiarTamaño(){
    console.log(ancho);
    console.log(alto);

    alto=parseInt(document.getElementById("alto").value);
    ancho=parseInt(document.getElementById("ancho").value);
    //Alteramos los valores de salida, entrada, y visor
    salida.style.width=""+ancho+"px";
    console.log(salida.style.width);
    salida.style.height=""+alto+"px";
    entrada.style.width=""+ancho+"px";
    entrada.style.height=""+alto+"px";
    document.getElementById("visor").style.height=""+alto+"px";
    document.getElementById("visor").style.height=""+ancho+"px";
}