const lineBreak =(example) =>{
    console.log("\n\n\n");
    console.log(example);
}

const arrayElement = [1, 2, 3, 4, 5, 6]
lineBreak("Array Elements")
console.log(arrayElement);

lineBreak("Array to String")
const arrayString = arrayElement.toString()
console.log(arrayString,typeof arrayString);

lineBreak("Array to Join")
const arrayJoin = arrayElement.join("-")
console.log(arrayJoin);

lineBreak("Poping Array Element")
const arrayPop = arrayElement.pop()
console.log(arrayPop,arrayElement);

lineBreak("Pushing Array element")
const arrayPush = arrayElement.push(25)
console.log(arrayPush,arrayElement);

lineBreak("Shift")
const arrayShift = arrayElement.shift()
console.log(arrayShift,arrayElement);

lineBreak("Unshift")
const arrayUnshift = arrayElement.unshift(45)
console.log(arrayUnshift,arrayElement);