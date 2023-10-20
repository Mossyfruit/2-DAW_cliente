'use strict'

async function solicitud(url){
    let resultado=await fetch(url);
    mostrar(resultado);
}