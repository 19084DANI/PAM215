const personas = [
    {nombre: "ana", edad: 22},
    {nombre: "luis", edad: 35},
    {nombre: "maria", edad: 28}
];
const encontrar = personas.find(x => x.nombre ==  "luis");
console.log( "la persona econtrada es ",encontrar);

const lista = personas.forEach(x => console.log(x));

const suma = personas.reduce((suma,x) => suma + x.edad,0);
console.log("la suma total de las edades es " + suma);