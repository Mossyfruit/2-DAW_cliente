"use strict"

import { Pila } from './classes/Pila.js';
import { Cola } from './classes/Cola.js';
import { Lista } from './classes/Lista.js';
import { introduzco, obtengo } from './modules/scriptPila.js';
import { llega, atiendo } from './modules/scriptCola.js';
import { anado, elimino } from './modules/scriptLista.js';
import { anadoPrior, eliminoPrior } from './modules/scriptListaPrior.js';

// OBJETOS
// ***** PILA *****
export let colada = new Pila();
export const PRENDAS = ['CAMISA', 'PANTALÓN', 'CAMISETA', 'CANZONCILLO', 'CALCETINES', 'CHAQUETA', 'BUFANDA', 'SUDADERA', 'CHALECO', 'ABRIGO'];
export const CESTA_COLADA = 10; // ¿Cuánta ropa admite la cesta de la colada?  
export let ultPrenda = "";

// ***** COLA *****
export let taller = new Cola();
export const MATRICULAS = ['12345-ABC', '23456-BCD', '34567-CDE', '45678-DEF', '56789-EFG', '67890-FGH', '78901-GHI', '89012-HIJ', '90123-IJK', '98765-JKL'];
export const AFORO_TALLER = 10; // ¿Cuántos coches puedo tener esperando en el taller?
export let ultCoche = "";

// ***** LISTA *****
export let toDo = new Lista();
export const TAREAS = ['0-LLAMAR', '1-RECOGER', '2-ENTRENAR', '3-ORDENAR', '4-FREGAR', '5-COMPRAR', '6-LIMPIAR', '7-ESTUDIAR', '8-LAVARSE', '9-COMIDA'];
export const MAX_TAREAS = 10; // ¿Cuántos coches puedo tener esperando en el taller?
export let ultTarea = "";

window.onload = function () {
    // ACCIONES
    // ***** PILA *****
    document.getElementById("introducir").addEventListener("click", introduzco);
    document.getElementById("obtener").addEventListener("click", obtengo);
    // ***** COLA *****
    document.getElementById("llegada").addEventListener("click", llega);
    document.getElementById("atender").addEventListener("click", atiendo);
    // ***** LISTA *****
    document.getElementById("anadir").addEventListener("click", anado);
    document.getElementById("eliminar").addEventListener("click", elimino);
    // ***** LISTA PRIORIDAD *****
    document.getElementById("anadirPrior").addEventListener("click", anadoPrior);
    document.getElementById("eliminarPrior").addEventListener("click", eliminoPrior);
}
