// ravi made a promise to kiran that he will call him after 5 seconds
// fullfill represent fullfill state
// reject represent reject state
let futureAvailability = true
let promiseObj = new Promise((fullfill,reject)=>{
    setTimeout(()=>{
        if(futureAvailability){
            fullfill("ravi called kiran")
        }else{
            reject("sorry i'll call u later")
        }
    },5000);
})
// then if promised is fullfilled
// catch if promise is rejected
promiseObj.then((msg)=>{
    console.log("fulfill state: "+msg)
}).catch((err)=>{
    console.log("reject state: "+err)
})
