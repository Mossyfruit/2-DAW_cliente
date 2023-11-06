'use strict'

function representaDato(datos){
    for (let dato of datos){
        let linea= document.createElement("tr");
        let campoClave= document.createElement("td");
        let campoValor= document.createElement("td");
        let campoBorrar= document.createElement("td");
        let botonBorrar= document.createElement("button");
        let imagen1= document.createElement("img");
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
        imagen1.style = "vertical-align: middle";

        
       
        linea.appendChild(campoClave);
        linea.appendChild(campoValor);
        
        campoBorrar.appendChild(botonBorrar);
        campoBorrar.appendChild(imagen1);
        linea.appendChild(campoBorrar);
       
        cuerpo.appendChild(linea);

    }
}