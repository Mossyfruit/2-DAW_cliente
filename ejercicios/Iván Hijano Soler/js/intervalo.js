'use strict'

/**
 * @author Mossfruit
 * 
 * En este documento esta la funcion que permite cambiar el intervalo de tiempo ( la velocidad ) de cambio de imagenes por el usuario
 */


function cambiarIntervalo(){
    console.log("El anterior intervalo era:"+intervalo);//Debugging
    intervalo=parseInt(document.getElementById("intervalo").value);//Recogemos el valor del usuario
    console.log("El nuevo intervalo es:"+intervalo)
    clearInterval(parar);//Paramos los intervalos previos para que recogan el nuevo valor
    clearInterval(completado);
    parar = setInterval(cambio, intervalo)//Y los reiniciamos
    cambio();
}