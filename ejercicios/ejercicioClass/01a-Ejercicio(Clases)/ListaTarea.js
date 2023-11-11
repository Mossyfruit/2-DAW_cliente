"use strict"

import { Lista } from './Lista.js';

export class ListaTarea extends Lista {
    constructor() {
        super();
    }
    llenar(elemento) {
        return super.enlistar(elemento, super.tamano());
    }
    vaciar() {
        if (Math.random() < 0.5) {
            console.log("cola");
            return super.desenlistar(super.tamano() - 1);
        } else {
            console.log("pila");
            return super.desenlistarPila(super.tamano() - 1);
        }
    }
    ojear() { // solo puedo mirar el último elemento que entró
        return super.ojear(super.tamano() - 1);
    }
}