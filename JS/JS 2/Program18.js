const lineBreak =(example) =>{
    console.log("\n\n\n");
    console.log(example);
}

const arrayElement = [1, 2, 3, 4, 5, 6]
lineBreak("Array Elements")
console.log(arrayElement);

delete arrayElement[0]
console.log(arrayElement);

lineBreak(" ")

const arrayList1 = [1,2,3,4,5,6,7]
const arrayList2 = [11,12,13,14,15,16,17]

const arrayListCombined= arrayList1.concat(arrayList2)
console.log(arrayListCombined);

lineBreak(" ")
