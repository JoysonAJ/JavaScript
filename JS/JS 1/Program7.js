const age = "20";
console.log(typeof age);

const numberAge = parseInt(age);
console.log(typeof numberAge);
console.log(numberAge);

console.log("\n\n\n");
if (numberAge < 0) {
    console.log("Enter valid age");
} else {
    console.log("Age is valid");
}
// Switch case
const date = new Date()
switch (date.getDay()) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
}

const numberVariable = 10

console.log("The Number is - \t", numberVariable%2==0 ? "Even" :"ODD");