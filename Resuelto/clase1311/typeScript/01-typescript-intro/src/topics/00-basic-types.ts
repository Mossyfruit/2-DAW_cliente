export {}

let nombre: string = "Strider";
let puntoVida: number = 95;
let arma:string = "Espada";

console.log(nombre,puntoVida,arma);

nombre = "Vader";
puntoVida = 100;
arma = "light saber";

console.log(nombre,puntoVida,arma);

console.log("FUNCIONES");

interface Productos{
    nombre: string;
    precio: number;
}
let smartphone = {
    nombre: "iphone",
    precio: 500
};

let tablet = {
    nombre: "ipad",
    precio: 1000
};

let productos = [smartphone, tablet];
function calculaISV(productos: Productos[]): [number, number]{
    let total: number = 0;
    productos.forEach(({precio}) => {
        total += precio;
});
    return ([total,total*0.15]);
}
console.log(calculaISV(productos));

console.log("OBJETOS")
interface Personaje{
    habilidades: string[],
    hp: number,
    nombre: string,
    puebloNatal?: string
}
let Tanjiro: Personaje = {
     habilidades: ['espada','salto'],
     hp: 100,
     nombre: "Tanjiro",

};

let Goku: Personaje = {
    habilidades: ['Puñetazo','Super Saiyan','Mal padre'],
    hp: 300,
    nombre: "Goku",
    puebloNatal: "Vegeta"
};

let heroe: Personaje={
    habilidades: ['Puñetazo','Super Saiyan','Mal padre'],
    hp: 300,
    nombre: "Goku",
    puebloNatal: "Vegeta"
};

heroe.hp= 120;
heroe.nombre= "pepeLuis";
heroe.habilidades= ['Petanca'];

console.log(Tanjiro,Goku,heroe);

let hpPoints: number| string;
hpPoints=95;