// ***** COLA *****
import { taller, MATRICULAS, AFORO_TALLER } from '../main.js';
import { generaAleatorioEnteros, generaAleatorioLetras } from './aleatorio.js';

export function llega() {
    let matricula = generaAleatorioEnteros(0, 9); // + generaAleatorioLetras();
    
    if (taller.tamano() == AFORO_TALLER) {
        document.getElementById("resCola").innerHTML = "DEBERÍAS EMPEZAR A REPARAR LOS COCHES";
    } else {
        taller.encolar(MATRICULAS[matricula]); // AÑADE UNA MATRICULA ALEATORIA (para no tener que escribirla) AL FINAL DE LA COLA
        document.getElementById("resCola").innerHTML = "QUEDAN POR REPARAR " + taller.tamano() + ":<br />" + taller.devolver() + ":<br />";
        if (!taller.vacio()) {
            document.getElementById("resCola").innerHTML += "EL SIGUIENTE COCHE A REPARAR ES :<br />" + taller.ojear();
        }
    }
}

export function atiendo() {
    if (taller.vacio()) {
        document.getElementById("resCola").innerHTML = "NO HAY MÁS COCHES QUE REPARAR";
    } else {
        if (taller.tamano() == 1) {
            taller.desencolar();
            document.getElementById("resCola").innerHTML = "NO HAY MÁS COCHES QUE REPARAR";
        } else {
            taller.desencolar(); // ELIMINA DEL PRINCIPIO DE LA COLA
            document.getElementById("resCola").innerHTML = "QUEDAN POR REPARAR " + taller.tamano() + ":<br />" + taller.devolver() + ":<br />";
            document.getElementById("resCola").innerHTML += "EL SIGUIENTE COCHE A REPARAR ES :<br />" + taller.ojear();
        }
    }
}