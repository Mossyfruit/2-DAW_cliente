"use strict"
export class Lista {
    constructor() {
        this.lista = new Array();
    }
    enlistar(elemento, posicion) {
        return this.lista.splice(posicion, 0, elemento);
    }
    desenlistarPila(posicion) {
        return this.lista.shift(posicion);
    }
    desenlistar(posicion) {
        console.log("lskjdflskf");
        return this.lista.splice(posicion, 1);
    }
    ojear(posicion) { // entendemos que se puede ojear cualquier posición
        return this.lista[posicion];
    }
    vacia() {
        return (this.lista.length == 0);
    }
    tamano() {
        return this.lista.length;
    }
    mostrarPila() {
        console.log(this.lista);
        document.getElementById("resPila").innerHTML=this.lista;
        if(this.lista.length>=10){
            document.getElementById("pilaLleno").innerHTML=`EMPIEZA A LAVAR GUARRO!`;
        }else{
            document.getElementById("pilaLleno").innerHTML=``;
        }
    }
    mostrarCola() {
        console.log(this.lista);
        document.getElementById("resCola").innerHTML=this.lista;
        if(this.lista.length>=10){
            document.getElementById("colaLleno").innerHTML=`EMPIEZA A REPARAR FLOJO!`;
        }else{
            document.getElementById("colaLleno").innerHTML=``;
        }
    }
    mostrarResLista(){
        console.log(this.lista);
        document.getElementById("resLista").innerHTML=this.lista;
        if(this.lista.length>=10){
            document.getElementById("listaLleno").innerHTML=`EMPIEZA A HACER LAS TAREAS!`;
        }else{
            document.getElementById("listaLleno").innerHTML=``;
        }
    }
}
