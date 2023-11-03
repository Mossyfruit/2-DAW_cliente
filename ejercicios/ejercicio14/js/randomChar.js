'use strict'
let output=[];
let contador=0;

function createRandomChar(length){
    let result       = '';
    let characters   = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let length_char  = characters.length;
    console.log(times);
    for(var e=0;e<times;e++){
        console.log("Esta es la vez "+contador);
        contador++;
        for (var i=0; i < charLength; i++) {
            result += characters.charAt(Math.floor(Math.random() * length_char));
            
        }
        result +="<br/>";
        console.log(result);
        
        
        //jump to next line in innerhtml
        
        
        }
        fillOutput(result);
        document.getElementById("resultado").innerHTML=output.join(" ");
        
        

        
        return result;
}

function fillOutput(charString){
    output.push(charString+"<br/>");
    
}