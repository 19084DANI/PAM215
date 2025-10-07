function saludar(nombre, callback){
console.log("Hola hermoso " + nombre);
    callback();
}
saludar("Charly", funciion(){
    console.log("Bienvenido a la pagina");
});

