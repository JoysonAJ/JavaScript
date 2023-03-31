const lineBreak = () => {
    console.log("\n\n\n");
}

const arrayElement = [1, 2, 3, 4, 5, 6]
console.log(arrayElement);

lineBreak()

const arrayMap = arrayElement.map((Element) => {
    console.log(Element);
    return Element + 10
})

console.log(arrayMap);

lineBreak()

const arrayFilter = arrayMap.filter((ele) => {
    return ele % 2 == 0
})
console.log(arrayFilter);


lineBreak()
console.log("Reduce");
const arrayReduce = arrayElement.reduce((val1, val2) => {
    return val1 + val2 + 1
})
console.log(arrayReduce);