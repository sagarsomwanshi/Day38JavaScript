let num = Number(prompt("Enter a number to find its factorial"));
let factorial = 1;
for(let i=1; i<=num; i++){
 factorial=factorial*i;
}
console.log("Factorial of ",num, ": ",factorial);