export {};

console.log("03 FUNCIONES");

function addNumbers1():void{
return undefined;
}
function addNumbers2(a:any,b:any) {

}
function addNumbers3(a:number, b:number){
return a+b;
}
const addNumbersArrow = (a:number, b:number): string =>{
return `${a+b}`;
}
function multiply(firstNumber:number, secondNumber?:number, base: number =2){
    return firstNumber*base;
} 
let result:number= addNumbers3(1,2);
let result2: string=addNumbersArrow(1,2);
const result3: number= multiply(5);
console.log(result,result2,result3);