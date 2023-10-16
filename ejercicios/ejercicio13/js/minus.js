'use strict'

function allLowercase() {
    input=document.getElementById("texto").value;
    console.log(input);
    
    
    let newinput=input.toLowerCase();
    console.log(newinput);
    
    document.getElementById("texto").value= newinput;
};
function firstLowercase() {
    input=document.getElementById("texto").value;
    console.log(input);
    
    let newinput= input[0];
    newinput=newinput.toLowerCase();
    console.log(newinput);
    for (let i = 1; i < input.length; i++) {
        newinput += input[i]; 
    }
    document.getElementById("texto").value= newinput;
}