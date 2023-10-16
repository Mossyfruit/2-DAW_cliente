'use strict'

//Arrays en Js.
let matriz = new Array();
let vector = [];

//Los objetos Array son objetos complejos, por lo que debemos usar new. new Array. 
/**
 * Todo en Js es un objeto, con valores. clave.valor1, clave.valor2, clave.valor3...
 * 
 * Clave y valor son la forma de referenciar los elementos dentro de un objeto.
 * 
 * Array [_,_,_]
 * 
 * Matriz [[],[],[]]
 * 
 * 
 */

let fruits = ["Apple","Orange","Plum"];

console.log("Comienzo de script");
console.log(fruits[2]);
console.log(fruits);
//Modificar elemento
console.log("------------------");
console.log("Modificacion de Array")

fruits[2] = "Pear";


//Invocar Array

console.log(fruits);

//Length

console.log("longitud del array");
console.log(fruits.length);

//Estructuras complejas

console.log("=================================");

let compleja= ["Apple", {name: 'Julio'},true, function(){return (`Hola ${compleja[1].name}`);}];
//Return devuelve la solucion
console.log(compleja);
console.log(compleja[3]()); //Esta forma *PROVOCA* la funcion, resolviendola.

console.log("==========================================");
console.log("Funciones con arrays");

let factura= [{"articulo":"oranges","precio":7,"cantidad":3,"dto":2, "Subtotal":function(){return (this.cantidad*this.precio)-(this.cantidad*this.precio)*this.dto/100}},
{"articulo":"apples","precio":4,"cantidad":15,"dto":4, "Subtotal":function(){return (this.cantidad*this.precio)-(this.cantidad*this.precio)*this.dto/100}}
];
let total=0;
for(let linea in factura){
    console.log(`El precio de ${factura[linea].articulo} es ${factura[linea].precio}`)
    total = total+factura[linea].Subtotal();
}
console.log(total);

console.log("=======================================");
console.log("Vamos a usar los metodos .pop,.push. ,shift y .unshift")

console.log("Al usar los metodos pop y shift nos devolvera lo extraido,")
console.log("Al usar push y unshift nos dira el nuevo tamaño del array")
//.pop elimina en el final.
console.log(fruits.pop());
//.push añade por el final
console.log(fruits.push("pomegranate"));
//.shift extrae del principio
console.log(fruits.shift());
//.unshift introduce al principio
console.log("--Introducimos primer elemento")
console.log(fruits.unshift("pineapple"));
console.log("--Introducimos segundo elemento")
console.log(fruits.unshift("strawberry"));
console.log(fruits);

//Copiar Arrays
console.log("Copiar Arrays");
console.log(`Las frutas originales son ${fruits}`);
let newFruits= fruits;
console.log(`Las nuevas son ${newFruits}`)
console.log("Pero esto en realidad no crea un nuevo array diferente, solo llama a la misma referencia de memoria");
console.log("-----------------------------------");
console.log("Vamos a crear una copia de array manual");
newFruits = new Array();
//for in lee el elemento
for(let fruit in fruits){
    newFruits.push(fruits[fruit]);
    console.log(`Se ha añadido ${newFruits[fruit]}`)
};
//for of lee el indice
//newFruits=[...fruits] << La manera adecuada y facil de copiar un array.
let dotsFruits= [...fruits];
console.log("Operador ...");
console.log(dotsFruits);
// Este operador recorre mapeando el array y pushea al nuevo.
console.log("Veamos el resultado:");
console.log(newFruits);

//Truncar un array es determinar su longitud de forma externa. Reducirla es posible, pero eso eliminara las entradas que queden fuera.
fruits.length=100;
fruits[100]="Melon";
console.log(fruits[100]);
console.log(fruits);
fruits.length=4;
console.log(fruits);

//Array bidimensional (Matriz)
//Array [[]]

console.log("=============================================================================================");
let matrizA= [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [0]
];
let matrizB= [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [0]
];
console.log(matrizA);
console.log(matrizA[2][1]);

console.table(matrizA);
let matrizC=new Array(matrizA.length);
console.table(matrizC.length);

for (let index = 0; index < matrizC.length; index++) {
    matrizC[index]=new Array(matrizB.length);
    
}

console.log(matrizC);
//Hemos estructurado matrizC como matrizA y B
console.log("====================");
console.log("Rellenemos C");

for (let i = 0; i < matrizC.length; i++) {
    for (let j = 0; j < matrizC[i].length; j++) {
        matrizC[i][j]=0;
        
    }
    
}

console.table(matrizC);
//Listo
console.log("Toda la matrizC esta rellena de 0")

for (let i = 0; i < matrizA.length; i++) {
    for (let j = 0; j < matrizB.length; j++) {   
        for (let k = 0; k < matrizC.length; k++) {
            
            matrizC[i][j]= matrizC[i][j]+(matrizA[i][k]*[matrizB[k][j]]);

            
        }
        
    }


    
}

console.log("Multiplicamos A * B y lo introducimos en C:")
console.table(matrizC);

//Copiar bidimensionales
let bidi1=[
    [1,2],
    [3,4]
];
//forma correcta de copiar matrices
let bidi2=[];
for(let i=0; i<bidi1.length;i++){
    bidi2[i]=[...bidi1[i]];
}
console.table(bidi2);

//MAP
/**
 * La función Map (Array.map)
 */

let numMap=[1,2,3,4];
//Funcion que copia
let copiaMap= (x) => x;
//Usamos map y llamamos al a funcion.
let numMap2= numMap.map(copiaMap);
console.log(numMap,numMap2);
//Usamos map para generar un nuevo valor
let copiaMapP= (x) => x+1;
//Se puede usar map para llamar a funciones que:
/**
 * 1) Map lee todo el array y sus valores(x),
 * 2) les hace aquello que estipule la funcion llamada (x) => x+1
 * 3)Devuelve el resultado de la funcion llamada (x) de el array mapeado
 */
let numMapP= numMap.map(copiaMapP);
console.log(numMap2,numMapP);

//Filter

let funcionCopiaFilter=()=> true;
