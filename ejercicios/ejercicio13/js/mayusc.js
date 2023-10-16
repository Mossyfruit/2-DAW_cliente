'use strict'
 
function firstUppercase() {
    input=document.getElementById("texto").value;
    console.log(input);
    
    let newinput= input[0];
    newinput=newinput.toUpperCase();
    console.log(newinput);
    for (let i = 1; i < input.length; i++) {
        newinput += input[i]; 
    }
    document.getElementById("texto").value= newinput;
}
function allUppercase() {
    input=document.getElementById("texto").value;
    console.log(input);
    
    
    let newinput=input.toUpperCase();
    console.log(newinput);
    document.getElementById("texto").value= newinput;
}
function firstUppercaseAll() {
    input=document.getElementById("texto").value;
    console.log(input);
    
   const palabras= input.value.split(" ");

   for (let i = 0; i < array.length; i++) {
    palabras[i]= palabras[i].charAt(0).toUpperCase + palabras[i].substring(1);
    
   }
   input.value=palabras.join(" ");
    
}