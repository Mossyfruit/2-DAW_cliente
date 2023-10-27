'use strict'

/**
===================================                     ___  ___ _____  _____  _____ ______ ______  _   _  _____  _____ 
============================================           |  \/  ||  _  |/  ___|/  ___||  ___|| ___ \| | | ||_   _||_   _|            =============================================
============================================           | .  . || | | |\ `--. \ `--. | |_   | |_/ /| | | |  | |    | |               =======================================================
============================================           | |\/| || | | | `--. \ `--. \|  _|  |    / | | | |  | |    | |               =======================================================
============================================           | |  | |\ \_/ //\__/ //\__/ /| |    | |\ \ | |_| | _| |_   | |               =======================================================
===================================                    \_|  |_/ \___/ \____/ \____/ \_|    \_| \_| \___/  \___/   \_/              =============================================
 */

/**
 * @author Mossfruit
 * 
 * Este proyecto consiste en la creacion de un programa con js capaz de:
 * 1)Llamar a imagenes aleatorias de una API. El link es https://source.unsplash.com/random/
 * 2)Crear un "carrusel" de imagenes, un visor que transiciona de unas imagenes a otras.
 * 
 *  INDICE  
 * ================================================== script.js
 *                          Este documento contiene todas las variables y la programación de los botones que se usaran en el programa. Este archivo debe 
 *                          cargar siempre el ULTIMO.
 * ================================================== solicitud.js
 *                          En este documento llamamos a la api para que nos proporcione nuevas imagenes.
 * ================================================== tamaño.js
 *                          Contiene una funcion para que el usuario pueda alterar el tamaño de las imagenes y el visor.
 *=================================================== cambiar.js
 *                          Aquí se halla la funcion principal para cambiar las posiciones y dar los datos iniciales de los componentes de la página
 * ================================================== transiciones.js
 *                          En este archivo se encuentra la función encargada de realizar las transiciones entre imagenes
 * ================================================== intervalo.js
 *                          El documento contiene la función para alterar la velocidad de ejecución de las transiciones.
 */



 /**
  * Limitaciones del proyecto:
  *     Aunque estamos usando una API para generar imagenes nuevas aleatorias en tiempo real, esto implica que no estamos guardando las imagenes que obtenemos
  *     en variables independientes, ya que para poder llamarlas tendriamos que conservar urls generadas aleatoriamente en memoria. Este metodo nos permite que las 
  *     imagenes SIEMPRE sean nuevas y verdaderamente aleatorias, pero nos obliga a dejar "resquicios" de imagenes ya cargadas o borrar la anterior al llamar
  *     a una nueva funcion de transicion para poder permitir que todo cargue correctamente.
  */



 /**
  * Definimos todas las variables que necesitaremos a lo largo del proyecto, además de crear constantes con los elementos del archivo index.html.
  */
const salida = document.getElementById("imagenSaliente");
const entrada= document.getElementById("imagenEntrante");
const divEnt = document.getElementById("entrada"); 
const divSal = document.getElementById("salida"); 
const tablaE = document.getElementById("tablaEntrante"); 
const tablaS = document.getElementById("tablaSaliente"); 
console.log(divSal);
salida.src="https://source.unsplash.com/random/300x200?sig="+Math.random()+"";
let intervalo=8000;
let completado = setInterval(transicion, 25000);
let posEnt= 400;
let posSal= 0;
let nImagen = 0;
let big=0;
let small=0;
let modo='0';
let parar;
let transparencia=0;


/**
 * Con esta funcion onload nos aseguramos de que el programa ya empiece las transiciones de forma automatica aun sin input del usuario.
 * El modo por defecto es "0", que es cambio de imagen sin transicion.
 */
window.onload = function (){
   clearInterval(completado) //Para el temporizador de transiciones
   clearInterval(parar) //Para el temporizador de cambio de imagen
   parar = setInterval(cambio, intervalo) //Inicia el temporizador inicial de cambio de imagen
   cambio() //cambia la imagen
}
/**
 * Programamos todos los botones del html.
 */
document.getElementById("none").onclick = function(){
    modo="0";
    
    
}    
document.getElementById("IzDe").onclick = function(){
    entrada.src=solicitar();
    modo="1";
    
}       
document.getElementById("DeIz").onclick = function(){
    entrada.src=solicitar();
    modo="2";
    
}   

document.getElementById("ArAb").onclick = function(){
    entrada.src=solicitar();
    modo="3";
    
}     
document.getElementById("AbAr").onclick = function(){
    entrada.src=solicitar();
    modo="4";
    
}   
document.getElementById("T").onclick = function(){
    entrada.src=solicitar();
    modo="5";
    
}              
document.getElementById("pG").onclick = function(){
    entrada.src=solicitar();
    modo="6";
    
}   
document.getElementById("Gp").onclick = function(){
    entrada.src=solicitar();
    modo="7";
    
}    

document.getElementById("commit").onclick = function(){
    cambiarTamaño();
}

document.getElementById("commitIntervalo").onclick = function(){
    cambiarIntervalo();
}