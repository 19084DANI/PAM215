const productos =  [
    {nombre: "laptop" , precio: 1200},
    {nombre: "mouse" , precio: 250},
    {nombre: "teclado" , precio: 750},
    {nombre: "monitor" , precio: 3000},
];

const precio =  productos.filter( x => x.precio > 1000);
console.log(precio);

const name = precio.map( y => y.nombre)
console.log(name)
