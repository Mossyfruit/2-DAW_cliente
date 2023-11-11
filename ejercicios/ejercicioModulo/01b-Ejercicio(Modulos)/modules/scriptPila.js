// ***** PILA *****
import { colada, PRENDAS, CESTA_COLADA } from '../main.js';
import { generaAleatorioEnteros, generaAleatorioLetras } from './aleatorio.js';

export function introduzco() {
    let prenda = generaAleatorioEnteros(0, 9); // + generaAleatorioLetras();

    if (colada.tamano() == CESTA_COLADA) {
        document.getElementById("resPila").innerHTML = "DEBERÍAS EMPEZAR A LAVAR LA ROPA";
    } else {
        colada.apilar(PRENDAS[prenda]); // AÑADE UNA PRENDA ALEATORIA (para no tener que escribirla) AL FINAL DE LA PILA
        document.getElementById("resPila").innerHTML = "QUEDAN POR LAVAR " + colada.tamano() + ":<br />" + colada.devolver() + ":<br />";
        if (!colada.vacio()) {
            document.getElementById("resPila").innerHTML += "LA SIGUIENTE PRENDA A LAVAR ES :<br />" + colada.ojear();
        }
    }
}

export function obtengo() {
    if (colada.vacio()) {
        document.getElementById("resPila").innerHTML = "NO HAY MÁS ROPA QUE LAVAR";
    } else {
        if (colada.tamano() == 1) {
            colada.desapilar();
            document.getElementById("resPila").innerHTML = "NO HAY MÁS ROPA QUE LAVAR";
        } else {
            colada.desapilar(); // ELIMINA DEL FINAL DE LA PILA
            document.getElementById("resPila").innerHTML = "QUEDAN POR LAVAR " + colada.tamano() + ":<br />" + colada.devolver() + ":<br />";
            document.getElementById("resPila").innerHTML += "LA SIGUIENTE PRENDA A LAVAR ES :<br />" + colada.ojear();
        }
    }
}