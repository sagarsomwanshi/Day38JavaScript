let num1 = Number(prompt("Enter a number : "));
let num2 = Number(prompt("Enter a number : "));
let num3 = Number(prompt("Enter a number : "));


let result1 = num1 + num2 * num3;
let result2 = num1 % num2 +num3;
let result3 = num3 + num1 / num2;
let result4 = num1 * num2 + num3;

console.log("Result 1 = " , result1);
console.log("Result 2 = " , result2);
console.log("Result 3 = " , result3);
console.log("Result 4 = " , result4);

if (result1 < result2 && result1 < result3 && result1 < result4) {
    minimumResult = result1;
} else if (result2 < result1 && result2 < result3 && result2 < result4) {
    mminimumResultin = result2;
} else if (result3 < result1 && result3 < result2 && result3 < result4) {
    minimumResult = result3;
} else {
    minimumResult = result4;
}

if (result1 > result3 && result1 > result4 && result1 > result2) {
    maximumResult = result1;
} else if (result2 > result3 && result2 > result4 && result2 > result1) {
    maximumResult = result2;
} else if (result3 > result1 && result3 > result2 && result3 > result4) {
    mmaximumResultax = result3;
} else {
    maximumResult = result4;
}

console.log("Maximum = " + maximumResult);
console.log("minimum = " + minimumResult);