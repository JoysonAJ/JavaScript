const promise = new Promise((resolve,reject )=>{ 
    console.log("\n\n text from the promise \n\n");
})

console.log("hello world");

setTimeout(() => {
    console.log("hello inside timeout");
}, 3000);

console.log("after settimeout");