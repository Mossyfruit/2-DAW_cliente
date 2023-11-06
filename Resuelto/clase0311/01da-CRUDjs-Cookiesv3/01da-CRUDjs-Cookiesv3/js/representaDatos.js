'use strict'

function representaDato(datos){
    for (let dato of datos){
        let linea= document.createElement("tr");
        let campoNombre= document.createElement("td");
        let campoEdad= document.createElement("td");
        let campoBorrar= document.createElement("td");
        let botonBorrar= document.createElement("button");
        let imagen1= document.createElement("img");
        //Desestructurar
        

        campoNombre.innerHTML = dato.nombre;
        campoEdad.innerHTML = dato.edad;
        console.log(dato.nombre);
        //Crear el botón borrar y asignarlo a la columna de borrado
        botonBorrar.innerHTML = "Borrar";
        botonBorrar.addEventListener("click", function(){
            borrarDato(dato.nombre);
        })
        imagen1.src="./img/delete.svg";
        imagen1.width="22";
        imagen1.height="22";
        imagen1.style = "vertical-align: middle";

        
       
        linea.appendChild(campoNombre);
        linea.appendChild(campoEdad);
        
        campoBorrar.appendChild(botonBorrar);
        campoBorrar.appendChild(imagen1);
        linea.appendChild(campoBorrar);
       
        cuerpo.appendChild(linea);

    }
}