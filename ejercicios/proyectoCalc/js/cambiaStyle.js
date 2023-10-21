'use strict'


function cambiaStyle(){
    let style=document.getElementById("selectorButton");
    style=style.value;
    console.log(style);
    if (style=="basica") {
       let botonMostrar= document.querySelectorAll(".science");
       console.log(botonMostrar);
        for(let i of botonMostrar){
            i.classList.add('removeScience');
            i.classList.remove('science');
        }
        
        document.getElementById("calc").style.width = "450px";
    }else if(style=="cientifica"){
        let botonMostrar= document.querySelectorAll(".removeScience");
       console.log(botonMostrar);
        for(let i of botonMostrar){
            i.classList.add('science');
            i.classList.remove('removeScience');
        }
        document.getElementById("calc").style.width = "600px";
    }
}
