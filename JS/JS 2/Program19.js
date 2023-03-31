const lineBreak = () => {
    console.log("\n\n\n");
}

const arrayElement = [1, 2, 3, 4, 5, 6, 7]
for(let i=0;i<arrayElement.length;i++){
    console.log(arrayElement[i]);
}

lineBreak()

console.log("ForEach loop - Array");
arrayElement.forEach((element)=>{
    console.log(element);
})

lineBreak()

console.log("Array.From Method");
const string1 = "Array Element"
const arrayFrom = Array.from(string1)
console.log(arrayFrom);

lineBreak()

console.log("for of loop");
for(let i of arrayElement){
    console.log(i);
}

lineBreak()

console.log("for in loop");
for(let index in arrayElement){
    console.log(index);
}

lineBreak()