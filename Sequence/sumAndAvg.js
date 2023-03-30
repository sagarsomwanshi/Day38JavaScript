
const  random = ()=>{
    return (Math.floor(Math.random()*89)+10);
}
let num1 = random();
let num2 = random();
let num3 = random();
let num4 = random();
let num5 = random();
let sum = num1+num2+num3+num4+num5;

console.log("Sum of 5 two digit number : ",sum);
console.log("Average of 5 two digit number : ",sum/5);



