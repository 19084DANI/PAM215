/*let nombre="dani";
setTimeout(()=> console.log("hello "+ nombre),3000);
setInterval(()=> console.log("como estas?"),5000);*/

/*const num = [1,2,3,4,5,6];

const cuadrado = num.map((Element) => Math.pow(Element,2));
let suma = num.map((Element) => (Element +2 ));
let resta = num.map((Element)=> (Element-4));
const encontrar = num.filter((Element) => Element % 2 === 0 );
const diferente = num.filter((Element) => Element % 2 !== 0 );
const sumtotal = num.reduce((accumulator, Element) => accumulator + Element);
const hola = num.forEach((Element)=>{
    console.log(Element*2);
});

console.log(cuadrado)
console.log(suma)
console.log(resta)
console.log(encontrar)
console.log(diferente)
console.log(sumtotal)*/
const Pi= 3.1416;
const num =[2,4,6,7];


const pares = num.filter((Element)=> Element % 2===0);
const multi = pares.map((Element)=> (Element*Pi));
const raiz = multi.map((Element)=> Math.sqrt(Element,2));

console.log(raiz)


/*
const cubo = num.map((Element)=> Math.sqrt(Element,3));
const encontrar = num.find((Element)=> Element > 5);
const suma = num.map((Element)=> Element + 2);
const rest = num.map((Element)=> Element - 5);
const cuadrado = num.map((Element)=> Math.pow(Element,2));
const sumapi = num.map((Element)=> Element*Pi);
const find = num.filter((Element)=> Element % 2 === 0);
const find2 = num.filter((Element)=> Element % 2 !== 0);
const sumtotal = num.reduce((accumulator,Element) => accumulator + Element);
const sumtotalpi = sumapi.reduce((accumulator,Element) => accumulator + Element);
const forich = num.forEach((Element)=>{
    console.log(Element+5);
})
console.log( "numero encontrado es " + encontrar)
console.log(cubo)
console.log(suma)
console.log(rest)
console.log(cuadrado)
console.log(sumapi)
console.log(find)
console.log(find2)
console.log(sumtotal)
console.log(sumtotalpi)*/



