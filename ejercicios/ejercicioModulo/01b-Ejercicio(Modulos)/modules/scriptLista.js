// ***** LISTA *****
import { toDo, TAREAS, MAX_TAREAS } from '../main.js';
import { generaAleatorioEnteros, generaAleatorioLetras } from './aleatorio.js';

export function anado() {
    let tarea = generaAleatorioEnteros(0, 9);
    let posicion = generaAleatorioEnteros(0, toDo.tamano());

    if (toDo.tamano() == MAX_TAREAS) {
        document.getElementById("resLista").innerHTML = "DEBERÍAS EMPEZAR A HACER LAS TAREAS";;
    } else {
        toDo.enlistar(TAREAS[tarea], posicion); // AÑADE UNA TAREA ALEATORIA (para no tener que escribirla) EN UNA POSICIÓN ALEATORIA (para no tener que escribirla)
        document.getElementById("resLista").innerHTML = "QUEDA POR HACER: <br />" + toDo.devolver();
    }
}

export function elimino() {
    let posicion = generaAleatorioEnteros(0, toDo.tamano());

    if (toDo.vacio()) {
        document.getElementById("resLista").innerHTML = "NO HAY MÁS TAREAS QUE HACER";
    } else {
        toDo.desenlistar(posicion); // ELIMINA UNA POSICIÓN ALEATORIA
        document.getElementById("resLista").innerHTML = "QUEDA POR HACER: <br />" + toDo.devolver();
        //document.getElementById("resLista").innerHTML += "LA SIGUIENTE TAREA ES :<br />" + toDo.ojear();
    }
}