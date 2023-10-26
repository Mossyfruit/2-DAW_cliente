'use strict'
/**
 * 
 * @author Mossfruit
 * @returns url;
 * 
 * Esta función llama a una url aleatoria de nuestra api. Esta url sera la que defina el src de nuestras imagenes.
 */
function solicitar(){
    let url="https://source.unsplash.com/random/300x200?sig="+Math.random()+"";
    
    
    return url;
    
}

