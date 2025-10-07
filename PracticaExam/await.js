async function esPar(num){
    let res = num.forEach((Element)=>{
        if(Element %2 !== 0){
            return Promise.reject("NO ES PAR");
        }
    })
    return "ES PAR";
}

evenNum = [2,4,6,8];
NotEven = [2,4,5,7,9];

 async function resolve(num) {
    
    try{
        let res = await esPar(num)
        console.log(res);
    }catch (ERROR){
        console.log(ERROR);
        
    }
 }

 resolve(NotEven);