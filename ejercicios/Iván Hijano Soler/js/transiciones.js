'use strict'
/**
 * @author Mossfruit
 * 
 * Aquí tenemos la funcion que transicionara de una imagen a otra
 */
let transpEnt=0;
let cont=0;
function transicion() {
    console.log("Iniciando transicion")//Para fines de debugging
    console.log("Intervalo:"+intervalo);
    switch(modo){
        case "0"://Sin transicion
        if(salida.src==entrada.src){//Como estamos trayendo imagenes de una api, nos aseguramos de que no sean la misma. De serlo, solicitamos una nueva
            console.log(entrada.src);
            console.log(salida.src);
            entrada.src=solicitar();
            
            console.log("Imagen")
                                    }
            salida.src=solicitar();
            entrada.src=solicitar();
            //Llamamos dos nuevas imagenes de nuestra API
            cont++//Pero debemos parar de llamarlas una vez las tengamos
            if(cont=5){
            clearInterval(completado);
                      }
            break;

       case "1"://De derecha a izquierda
        console.log(divEnt);//Para fines de debugging

        if(salida.src==entrada.src){//Como estamos trayendo imagenes de una api, nos aseguramos de que no sean la misma. De serlo, solicitamos una nueva
        console.log(entrada.src);
        console.log(salida.src);
        entrada.src=solicitar();
        
        console.log("Imagen")
                                }


        posEnt -= 10; //px de desplazamiento de la imagen que entra
        
        divEnt.style.left = posEnt+ "px"; //desplazamiento del div que entra
        
        if (posEnt <= 0) { //Si la pantalla ya esta en la posicion adecuada,
           clearInterval(completado) //Para el movimiento.  
           console.log("Ha terminado la transicion")
           salida.src=entrada.src;//Para despojarnos de los resquicios de imagenes anteriores, conservando la nueva.
           
            
            
        }
            break;
            case "2"://De izquierda a derecha
                console.log(divEnt);//para fines de debugging


                if(salida.src==entrada.src){//Como estamos trayendo imagenes de una api, nos aseguramos de que no sean la misma. De serlo, solicitamos una nueva
                console.log(entrada.src);
                console.log(salida.src);
                entrada.src=solicitar();
                
                console.log("Imagen")
                                            }
                posEnt += 10; //Identico a la anterior, pero en valor positivo
                
                divEnt.style.left = posEnt+ "px"; //idem
                
                
                if (posEnt >= 0) { 
                   clearInterval(completado) 
                   console.log("Ha terminado la transicion")
                   salida.src=entrada.src;
                   
                    
                    
                                }

                break;
                case "3":// En este caso, de arriba a abajo, el funcionamiento es identico a las dos anteriores, pero cambiamos .top en el estilo de css.
                console.log(divEnt);
                if(salida.src==entrada.src){
                console.log(entrada.src);
                console.log(salida.src);
                entrada.src=solicitar();
                
                console.log("Imagen")
                                            }
                posEnt += 10; 
                
                divEnt.style.top = posEnt+ "px"; //movimiento vertical ascendente
                
                
                if (posEnt >= 0) { 
                   clearInterval(completado) 
                   console.log("Ha terminado la transicion")
                   salida.src=entrada.src;
                   
                    
                    
                                }
                break;

                case "4"://Caso de abajo a arriba. Identico al anterior, pero con valores negativos de posicion concatenados.
                    console.log(divEnt);
                    if(salida.src==entrada.src){
                    console.log(entrada.src);
                    console.log(salida.src);
                    entrada.src=solicitar();
                    
                    console.log("Imagen")
                                                }
                    posEnt -= 10;
                    
                    divEnt.style.top = posEnt+ "px"; 
                    
                    
                    if (posEnt <= 0) { 
                       clearInterval(completado)  
                       console.log("Ha terminado la transicion")
                       salida.src=entrada.src;
                       
                        
                        
                                    }
                    break;

            case "5":// Caso de transparencia. En el caso de la transparencia debemos tener en cuenta el navegador usado, además de modificar la 
                    //  culidad opacity en el css.
                if(salida.src==entrada.src){
                    console.log(entrada.src);
                    console.log(salida.src);
                    entrada.src=solicitar();
                    
                    console.log("Imagen")
                                            }
                transparencia -= 2; //Disminuimos la transparencia por cada iteracion
                
                divEnt.style.opacity = (100-transparencia)/100; //version compatible con mozilla
                divSal.style.opacity = transparencia/100; //version compatible con mozilla
                divEnt.style.filter = "alpha(opacity=" + (100-transparencia) + ")"; //I.E
                divSal.style.filter = "alpha(opacity=" + transparencia + ")"; //I.E
                if (transparencia <= 0) { 
                    clearInterval(completado) //Paramos como en todos los demas casos una vez hecha la transicion.
                    console.log("Ha terminado la transicion")
                    salida.src=entrada.src;

                                        }
                
                break;


            case "6"://Aumento de tamaño
                if(salida.src==entrada.src){
                    console.log(entrada.src);
                    console.log(salida.src);
                    entrada.src=solicitar();
                    console.log("Imagen");
                    }
                    big += 10; //Lo que va aumentar el tamaño de la imagen cada iteracion.
                    entrada.style.width = big + "px" //Solo aplica el ancho
                    if (big >= 400) {
                        clearInterval(completado);
                        console.log("Ha terminado la transicion")
                        salida.src=entrada.src;

                                    }
                break;

                case "7"://Disminucion de tamaño
                    if(salida.src==entrada.src){
                        console.log(entrada.src);
                        console.log(salida.src);
                        entrada.src=solicitar();
                        console.log("Imagen");
                        }
                        small -= 10; //funciona exactamente igual que el anterior ,pero en negativo
                        salida.style.width = small + "px" 
                        divSal.style.zIndex="3";
                        if (small <= 0) { 
                            clearInterval(completado);
                            console.log("Ha terminado la transicion")
                            salida.src=entrada.src;
    
                         }
                    break;
    

    }
    

}

