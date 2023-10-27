'use strict'
let output=[];


function createRandomChar(Length){
    let result       = '';
    let characters   = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let length_char  = characters.length;
    for (var i=0; i < Length; i++) {
        result += characters.charAt(Math.floor(Math.random() * length_char));
        }
        console.log(result);
        fillOutput(result);
        output.sort();
        document.getElementById("resultado").innerHTML=output.join(" ");
        document.getElementById("resultado").innerHTML+="<br>";
        return result;
}

function fillOutput(charString){
    output.push(charString)
}