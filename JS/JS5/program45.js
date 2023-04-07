let a = 5
let b = 5

const sum = (num1,num2)=>{
    console.log("Running inside the SetTimeOut");
    console.log(num1 + num2);
}

setTimeout(sum,2500,a,b)

let i=0
const setIntervalCall = ()=>{
    console.log("this is set Interval block",i++);
}

setInterval(setIntervalCall, 1000);