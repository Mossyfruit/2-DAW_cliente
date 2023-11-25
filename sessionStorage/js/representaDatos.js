"use strict"

function representaDatos(dato) {
    let linea = document.createElement("tr");
    let campoNombre = document.createElement("td");
    let campoEdad = document.createElement("td");
    let campoBorrar = document.createElement("td");
    let botonBorrar = document.createElement("button");
    /*      let botonBorrar = document.createElement("input"); */
    let imagenBorrar = document.createElement("img");

    campoNombre.innerHTML = dato.nombre;
    campoEdad.innerHTML = dato.edad;

    /*      botonBorrar.type = "button";
            botonBorrar.value = "Borrar"; */
    botonBorrar.innerHTML = "Borrar";
    botonBorrar.addEventListener("click", function () {
        borrarDato(dato.nombre);
    });

    imagenBorrar.src = "./img/delete.svg";
    imagenBorrar.width = "22";
    imagenBorrar.height = "22";
    imagenBorrar.style = "vertical-align: middle";

    linea.appendChild(campoNombre);
    linea.appendChild(campoEdad);
    campoBorrar.appendChild(botonBorrar);
    campoBorrar.appendChild(imagenBorrar);
    linea.appendChild(campoBorrar);

    cuerpo.appendChild(linea);

}