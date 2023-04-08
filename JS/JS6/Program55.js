const promiseVar1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log("I am a promise inside the setTimeout");
        resolve(true)
    }, 3000);
    // reject(new Error("Reject is called"))
}).then((value) => {
    console.log(`the then result is ${value}`);
}).catch((Error)=>{
    console.error(`the Error occured is ${Error}`);
})


const promiseVar2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log("I am a promise inside the setTimeout");
        reject(new Error("Reject is called"))
    }, 3000);
    // resolve(true)
}).then((value) => {
    console.log(`the then result is ${value}`);
}).catch((Error)=>{
    console.error(`the Error occured is ${Error}`);
})