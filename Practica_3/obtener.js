function simularPeticionAPI(){
    return new Promise(resolve => {
        setTimeout(() =>{
            resolve("datos recibidos correctamente");
        },5000);
    });
}
async function obtenerdatos(){
    let espera = await simularPeticionAPI();
    console.log(espera);
}
obtenerdatos();
    
