"use strict"
export class Lista {
    constructor() {
        this.lista = new Array();
    }
    enlistar(elemento, posicion) {
        console.log("introduciendo: "+elemento+" en "+posicion)
        return this.lista.splice(posicion, 0, elemento);
    }
    desenlistarPila(posicion) {
        return this.lista.shift(posicion);
    }
    desenlistar(posicion) {
        console.log("desenlistando:" + posicion);
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
  
    hacerConPrioridad(){
        let mayor = {
            posicion: 0,
            contenido: "",
        };
        if (!this.vacia()) {
            mayor.contenido = this.lista[mayor.posicion];
            for (let i = 1; i < this.lista.length; i++) {
                if (mayor.contenido < this.lista[i]) {
                    mayor.posicion = i;
                    mayor.contenido = this.lista[i];
                }
            }
            console.log(mayor.posicion);
            
        }
        return mayor;
      
    }
    mostrarResListaPrior(){
        console.log(this.lista);
        document.getElementById("resListaPrior").innerHTML=this.lista;
        if(this.lista.length>=10){
            document.getElementById("listaLlenoPrior").innerHTML=`EMPIEZA A HACER LAS TAREAS!`;
        }else{
            document.getElementById("listaLlenoPrior").innerHTML=``;
        }
    }
}
