// NN-BB-SS-U
console.log("The Data Type in JavaScript");

console.log("N - NULL \n");
console.log("N - Numeric \n");

console.log("B - Boolean \n");
console.log("B -BigInt \n");

console.log("S - String \n");
console.log("S - Symbol \n");

console.log("U - Undefined \n");

let nullType = null
let numericType = 345
let booleanType = true
let bigInt_Type = BigInt("548")
let stringType = "Hello World"
let symbolType = Symbol("This symbol type example")
let undefinedType = undefined

console.log(`${nullType} \t ${numericType} \n`);
console.log(`${booleanType} \t ${bigInt_Type} \n`);
console.log(`${stringType} \t`);
console.log(symbolType);
console.log(`\n ${undefinedType} \n\n`);

// Type of finding
console.log("______________________________________");
console.log(typeof nullType);
console.log(typeof numericType);
console.log(typeof booleanType);
console.log(typeof bigInt_Type);
console.log(typeof stringType);
console.log(typeof symbolType);
console.log(typeof undefinedType);

console.log("__________________________________________");

console.log("Object in JavaScript");
const itemObj = {
    regNo : "001",
    course : "MCA",
    Fee : 110000,
    batch : "A"
}

console.log(itemObj["regNo"]);
console.log(itemObj.Fee);
