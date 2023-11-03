'use strict';

function mostrarDato(){
    const cuerpo= document.getElementById("cuerpo");
    datos= document.cookie.split(";");

    if(document.cookie && document.cookie.length >0){//Si hay una cookie
    cuerpo.innerHTML = "Las cookies almacenadas son: <br/>";
    for (let dato of datos){
        let linea= document.createElement("tr");
        let campoClave= document.createElement("td");
        let campoValor= document.createElement("td");
        let campoBorrar= document.createElement("td");
        let botonBorrar= document.createElement("button");
        let imagen1= document.createElement("imagen");
        //Desestructurar
        const [clave, valor] = dato.split("=");

        campoClave.innerHTML = clave;
        campoValor.innerHTML = valor;
        //Crear el botón borrar y asignarlo a la columna de borrado
        botonBorrar.innerHTML = "Borrar";
        botonBorrar.addEventListener("click", function(){
            borrarDato(clave);
        })
        imagen1.src="./img/delete.svg";
        imagen1.width="22";
        imagen1.height="22";
        imagen1.style = "verticañ-align: middle";

        

        linea.appendChild(campoBorrar);
        linea.appendChild(campoValor);
        linea.appendChild(campoClave);

        campoBorrar.appendChild(botonBorrar);
        campoBorrar.appendChild(imagen1);
        cuerpo.appendChild(linea);

    }
    }
}