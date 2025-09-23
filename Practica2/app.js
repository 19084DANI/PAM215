const persona ={
    nombre: "Ivan Isay",
    edad: 37,
    direccion: {
        ciudad: "Qro",
        pais: "MX"
    }
};
const {nombre,edad,direccion} = persona;
console.log("hola me llamo es " + nombre +", tengo" + edad + "  aniosy vivo en" + direccion.ciudad);