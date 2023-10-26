'use strict'
/**
 * @author Mossfruit
 * 
 * A pesar del tamaño de esta función, en realidad es bastante simple: establece unos valores basicos de posicion y tamaño de las imagenes y divs en los que
 * se encuentran, y segun el modo, altera los valores de las mismas para que ocurran las transiciones correctamente
 *  */
function cambio() { 
    //Reiniciamos variables
    //Posicion de Saliente
    divSal.style.left = "0px" 
    divSal.style.top = "0px"
    //Posicion de Entrante
    divEnt.style.left = "0px" 
    divEnt.style.top = "0px"
    //Hacemos de la opacidad de saliente "1", o opaca.
    divSal.style.opacity = 1; 
    divSal.style.filter = "alpha(opacity=100)";   //IE
    //Modificamos el tamaño de las imagenes 
    entrada.style.width = "400px"; 
    salida.style.width = "400px"; 
    //Colocamos la superposicion 
    divSal.style.zIndex = "0" 

    switch (modo) {// Cambiamos el estilo segun el modo, y por tanto, la transicion
       case "0": // Sin transicion
          divSal.style.left = "0px" // Posicion central inicial
          
          break;
       case "1": //De derecha a izquierda
            
          posEnt = 600; //Posicion del div entrante
          posSal = 0; //El div saliente se queda en su posicion inicial
            
          
          break;
       case "2": //De izquierda a derecha
          posEnt = -600; //Posicion del div entrante
          posSal = 0; //El div saliente se queda en su posicion inicial
         ;
          break;
       case "3": // De arriba a abajo
          divEnt.style.left = "0px" //Ponemos la posicion div que va a entrar
          posEnt = -340;
          posSal = 0;
          
          break;
       case "4": //De abajo a arriba
          divEnt.style.left = "0px"//Ponemos la posicion div que va a entrar
          posEnt = 340;
          posSal = 0;
         
          break;
       case "5": //Transparencias
          transparencia=100;
        
          break;
       case "6": //Aumentar imagen 
          big = 0; //tamaño inicial
          tablaE.valign = "middle" //centramos vertical y horizontalmente la tabla
          tablaE.align = "center" 
          tablaE.height = "300" //altura = altura de imagen
          tablaE.width = "400" //anchura = anchura de imagen
          
          break;
       case "7": //Disminuir imagen 
          small = 400; //tama&ntilde;o inicial
          tablaE.valign = "middle" //centramos vertical y horizontalmente
         
          tablaS.align = "center" 
          tablaS.height = "300" //altura = altura de imagen
          tablaS.width = "400" //anchura = anchura de imagen
       
          break;
    }
    
    completado = setInterval(transicion, 50) //iniciar temporizador de transicion
 
 }