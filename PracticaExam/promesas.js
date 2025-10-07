/*function walkDog() {
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("paseando al perro");

        },1500);
    })

}
function cleankitchen(callback){
    setTimeout(()=>{
        console.log("limpiar la cocina");
        callback();
    },2500);
}
function Tirarbasura(callback){
    setTimeout(()=>{
        console.log('tirar la basura');
        callback();
    },2000);
}
walkDog(() =>{
    cleankitchen(() =>{
        Tirarbasura(() => console.log("terminaste"));
    });
});*/

function validacion(usario){
    return new Promise((resolve,reject) =>{
        if(usario === "Dani"){
            resolve("usario aceptado");
        }else{
         reject("usario rechazado");
        }

    });     
}

const nombre = "Dan";

validacion(nombre)
            .then((validacion)=>{console.log(validacion)})
            .catch((validacion)=> console.error(validacion))