'use strict';

function leerDatos() {
    console.log("Mostrando datos...");
    const cuerpo = document.getElementById("cuerpo");
    cuerpo.innerHTML = "Los datos almacenados son: <br />";
    let url='./php/servidorAjax.php';
    let datos = { "operacion": 'leer' };
    let metodo= 'post';

    let peticionAjax = clienteAjax(url, datos, metodo);

    peticionAjax.done(function (data) { // SI TODO HA IDO BIEN, MUESTRO LOS DATOS
        for (let row of data) { // RECORRO CADA UNO DE LOS 10 REGISTROS
            var linea = document.createElement("tr"), // creo una fila
                campoNombre = document.createElement("td"), // creo una celda para el nombre
                campoClave = document.createElement("td"), // creo una celda para la clave
                campoBorrar = document.createElement("td"), // creo una celda para el botón 'borrar'
                botonBorrar = document.createElement("input"), // creo un botón
                imagenBorrar = document.createElement("img"); // creo una imagen

            campoNombre.innerHTML = row[0]; // escribo el nombre contenido en el array
            campoClave.innerHTML = row[1]; // escribo la clave contenida en el array

            botonBorrar.type = "button";
            botonBorrar.id = "borrar";
            botonBorrar.value = "Borrar";
            botonBorrar.addEventListener('click', function () { // añado al botón un evento de escucha (listener)
                borrarDatos(row[0]); // la función 'forEach' tiene una variable 'posición', la cuál uso para saber el elemento que he de borrar
            });

            imagenBorrar.src = "./img/delete.svg"; // añado al botón una imagen
            imagenBorrar.alt = "Borrar";
            imagenBorrar.width = "22"; // añado al botón los estilos
            imagenBorrar.height = "22";
            imagenBorrar.style = "vertical-align: middle";

            campoBorrar.appendChild(botonBorrar); // añado el botón a la celda
            campoBorrar.appendChild(imagenBorrar); // añado la imagen al botón

            linea.appendChild(campoNombre); // añado a la línea la celda con el nombre
            linea.appendChild(campoClave); // añado a la línea la celda con la clave
            linea.appendChild(campoBorrar); // añado a la línea la celda con el botón

            cuerpo.appendChild(linea); // añado al tbody 'cuerpo' la línea
        }
    });

    peticionAjax.fail(function (data) { // SI ALGO HA IDO MAL, MUESTRO LO QUE DEVUELVE LA LLAMADA
        console.log(data);
    });
}