console.log("harry\"".length);

const string1 = "hello, Good Morning"

console.log(string1.includes("hello"));
console.log(string1.includes("Hello"));

console.log(string1.startsWith("hello"));
console.log(string1.startsWith("start"));

const string2 = "Please give the amount 2500"
const amount = Number.parseInt(string2.slice("Please give the amount ".length))
console.log(amount);