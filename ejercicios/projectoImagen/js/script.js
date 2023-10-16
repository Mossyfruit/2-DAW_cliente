"use strict"

/**
 * Visor de imagenes Js,CSS y html5.
 */

// Revisar los HIJOS de img
let img
console.log(img= document.getElementsByClassName("image"));
let src;
const modal= document.getElementById("modal")
for (var i = 0 ; i < img.length; i++) {
    console.log(src=img[i].getAttribute("src")); 
    img[i].addEventListener('click' , trabajo , false ) 
    
 };


function trabajo(){
 
  modal.setAttribute("src",src);
 };