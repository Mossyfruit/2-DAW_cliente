"use strict"

function representaDatos(dato) {
    let linea = document.createElement("tr");
    let campoClave = document.createElement("td");
    let campoValor = document.createElement("td");
    let campoBorrar = document.createElement("td");
    let botonBorrar = document.createElement("button");
    /*      let botonBorrar = document.createElement("input"); */
    let imagenBorrar = document.createElement("img");

    campoClave.innerHTML = dato[0]; // en dato[0] está la clave
    campoValor.innerHTML = dato[1]; // en dato[1] está el valor

    /*      botonBorrar.type = "button";
            botonBorrar.value = "Borrar"; */
    botonBorrar.innerHTML = "Borrar";
    botonBorrar.addEventListener("click", function () {
        borrarDato(dato[0]);
    });

    imagenBorrar.src = "./img/delete.svg";
    imagenBorrar.width = "22";
    imagenBorrar.height = "22";
    imagenBorrar.style = "vertical-align: middle";

    linea.appendChild(campoClave);
    linea.appendChild(campoValor);
    campoBorrar.appendChild(botonBorrar);
    campoBorrar.appendChild(imagenBorrar);
    linea.appendChild(campoBorrar);

    cuerpo.appendChild(linea);
}