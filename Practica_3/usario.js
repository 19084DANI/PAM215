function verificarUsario(user){
    let usario = new Promise((resolve , reject)=> {
        if(user == "admin"){
            resolve("Acceso concedido")
        }else{
            reject("Acceso denegado")
        }
    });
    return usario;
}

verificarUsario("admin")
.then(res => console.log(res))
.catch(err => console.error(err));

verificarUsario("iivan")
.then(res => console.log(res))
.catch(err => console.error(err));