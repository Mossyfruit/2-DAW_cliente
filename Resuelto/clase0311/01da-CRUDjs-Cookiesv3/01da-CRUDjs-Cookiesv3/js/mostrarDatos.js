'use strict';
let datos=[];
function mostrarDato(datos){
    const cuerpo= document.getElementById("cuerpo");
    datos = JSON.parse(localStorage.getItem('localData'));
    console.log(localStorage)
    console.log(datos);
    console.log("Tenemos datos");
    if(localStorage.getItem("localData") && JSON.parse(localStorage.getItem("localData"))!=""){//Si hay una cookie
    cuerpo.innerHTML = "La informacion almacenada en LocalStorage es: <br/>";
    representaDato(datos)
    }else{
        cuerpo.innerHTML = "No hay datos"
    }
}