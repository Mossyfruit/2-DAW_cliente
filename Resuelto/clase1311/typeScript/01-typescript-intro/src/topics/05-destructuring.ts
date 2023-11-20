export {}

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
interface textCalculationOptions {
    tax: number,
    products: Productos []
}

function textCalculator(Compra: textCalculationOptions): number[] {

}