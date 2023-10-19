'use strict'
function separador(){if(cadena.includes(simbolo,0)){
    //Separamos numeros de operadores
    let posFinal=-1;
    console.log(cadena);
    if(cadena.startsWith('-')){
        num1=parseFloat(cadena.slice(cadena.indexOf(simbolo,posFinal)+1))*-1;
        console.log(`el numero negativo primero es: ${num1}`);
        //Ahora obtenemos los numeros negativos de cadena
       /*  for (let i = 0; i < cadena.length; i++) {
            if(cadena[i]=='-'){
                num2=parseFloat(cadena.slice(i+1));
                console.log(`el numero negativo segundo es: ${num2}`);
               */
                }else{num1=parseFloat(cadena.slice(0,cadena.indexOf(simbolo,posFinal)));
        num2=parseFloat(cadena.slice(cadena.indexOf(simbolo,posFinal)+1));}
    
    
    console.log(num1);
    
    console.log(num2);
}
    }
