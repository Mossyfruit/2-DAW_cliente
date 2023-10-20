'use strict'


let url="https://meowfacts.herokuapp.com/"
const cargar = document.getElementById("cargar");
cargar.addEventListener("click", function() {
    carga(url);
}); //REFACTORIZAR?

const salida= document.getElementById("salida");
