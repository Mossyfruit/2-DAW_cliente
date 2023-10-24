"use strict"

const dimension = document.getElementById("dimension");
const generar = document.getElementById("generar");

const salidaMA = document.getElementById("salidaMA");
const salidaMB = document.getElementById("salidaMB");
const salidaR = document.getElementById("salidaR");
let salidaRtd = document.getElementById("salidaRtd");

const sumar = document.getElementById("sumar");
const restar = document.getElementById("restar");
const multiplicar = document.getElementById("multiplicar");

let matrizA = [];
let matrizB = [];

generar.addEventListener("click", function () {
    matrizA = generaMatriz(parseInt(dimension.value));
    matrizA = rellena(matrizA);
    salidaMA.appendChild(mostrarMatriz(matrizA));

    matrizB = generaMatriz(parseInt(dimension.value));
    matrizB = rellena(matrizB);
    salidaMB.appendChild(mostrarMatriz(matrizB));
});

sumar.addEventListener("click", function () {
    let matrizR = sumarMatrices(matrizA, matrizB);
    
    salidaRtd.replaceChildren(mostrarMatriz(matrizR));//USAR ESTE METODO
    
});

restar.addEventListener("click", function () {
    let matrizR = restarMatrices(matrizA, matrizB);
    salidaRtd.removeChild(salidaRtd.firstChild);
    salidaR.appendChild(mostrarMatriz(matrizR));
})

multiplicar.addEventListener("click", function () {
    let matrizR = multiplicarMatrices(matrizA, matrizB);
    salidaRtd.removeChild(salidaRtd.firstChild);
    salidaR.appendChild(mostrarMatriz(matrizR));
})