"use strict"

import { Pila } from './Pila.js';
import { Cola } from './js/Cola.js';
import { paraLavar } from './js/paraLavar.js';
import { lavar } from './js/lavar.js';
import { paraReparar } from './js/paraReparar.js';
import { reparar } from './js/reparar.js';
import {  mostrarResPila } from './js/mostrarResPila.js';
import { generaN } from './js/aleatorio.js';
import {  mostrarResCola } from './mostrarResCola.js';
import {  mostrarResLista } from './mostrarResLista.js';
import {  ListaTarea } from './ListaTarea.js';
import {  parahacer } from './parahacer.js';
import {  cumplido } from './cumplido.js';


const PRENDAS = [
    'CAMISA',
    'PANTALÓN',
    'CAMISETA',
    'TOALLA',
    'CALCETINES',
    'CHAQUETA',
    'BUFANDA',
    'SUDADERA',
    'CHALECO',
    'ABRIGO'];

const cesto = new Pila();
const introducir = document.getElementById("introducir");
introducir.addEventListener("click", function () {
    let prenda = PRENDAS[generaN(1, PRENDAS.length) - 1];
    paraLavar(cesto, prenda);
    mostrarResPila(cesto);
   
   
});

const obtener = document.getElementById("obtener");
obtener.addEventListener("click", function () {
    console.log(`He lavado: ${lavar(cesto)}`);
    mostrarResPila(cesto);
});

const MATRICULAS = [
    '12345-ABC',
    '23456-BCD',
    '34567-CDE',
    '45678-DEF',
    '56789-EFG',
    '67890-FGH',
    '78901-GHI',
    '89012-HIJ',
    '90123-IJK',
    '98765-JKL'];
const taller = new Cola();

const llegada = document.getElementById("llegada");
llegada.addEventListener("click", function () {
    let coche = MATRICULAS[generaN(1, MATRICULAS.length) - 1];
    paraReparar(taller, coche);
    mostrarResCola(taller);
    /*     taller.mostrar(taller.encolar(coche)); */
});

const atender = document.getElementById("atender");
atender.addEventListener("click", function () {
    console.log(`He reparado: ${reparar(taller)}`);
    mostrarResCola(taller);
});

const TAREAS = [ 
    '0-LLAMAR', 
    '1-RECOGER',
    '2-ENTRENAR',
    '3-ORDENAR',
    '4-FREGAR',
    '5-COMPRAR',
    '6-LIMPIAR',
    '7-ESTUDIAR',
    '8-LAVARSE',
    '9-COMIDA'];

const listaTarea=new ListaTarea();
const anadir = document.getElementById("anadir");
anadir.addEventListener("click", function () {
    let tarea = TAREAS[generaN(1, TAREAS.length) - 1];
    parahacer(listaTarea, tarea);  
    mostrarResLista(listaTarea);
   
});

const eliminar = document.getElementById("eliminar");
eliminar.addEventListener("click", function () {
    console.log(`He lavado: ${cumplido(listaTarea)}`);
    mostrarResLista(listaTarea);
});

const anadirPrior = document.getElementById("anadirPrior");
anadirPrior.addEventListener("click", function () {
    let tarea = TAREAS[generaN(1, TAREAS.length) - 1];
    parahacer(listaTarea, tarea);  
    mostrarResLista(listaTarea);
   
});

const eliminarPrior = document.getElementById("eliminarPrior");
eliminarPrior.addEventListener("click", function () {
    console.log(`He lavado: ${cumplido(listaTarea)}`);
    mostrarResLista(listaTarea);
});