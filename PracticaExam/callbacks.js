/*function func1(callback){
    setTimeout(() => {console.log("Hola");
     callback();},5000);
}
function func2(callback2) {
    setTimeout(() => {console.log("como estan?");
    callback2();},3000);
}
function func3(callback3){
    setTimeout(() => {console.log("quiero pasar mi examen");
    callback3();},2000);
}
func1(()=>{
    func2(func3);
});*/

const nombre = "dani";
function func1(callback){
    setTimeout(()=> {console.log("Hola!" + nombre);
        callback();},3000);
}
function func2(callback){
    setTimeout(()=> {console.log("Bienvenido " + nombre);
        callback();},3000);
}
function func3(callback){
    setTimeout(()=>{console.log("Que hacen");
        callback();},2000);
}
function func4(callback){
    setTimeout(()=> {console.log("hola perlita");
        callback();},2000);
}
function func5(callback){
    setTimeout(()=>{console.log("hola richi ");
        callback();
    },2000);
}
func1(()=>{
    func2(()=>{
        func3(()=>{
            func4(()=>{
                func5();
            });
        });
    });
});
