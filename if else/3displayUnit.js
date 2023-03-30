let num = Number(prompt("Enter a number : "));

if (num >= 1 && num <= 9) {
    console.log("unit");
}
else if (num >= 10 && num <= 99) {
    console.log("Ten");
}
else if (num >= 100 && num <= 999) {
    console.log("Hundred");
}
else if (num >= 1000 && num <= 99999) {
    console.log("Thousand");
}
else {
    console.log("Invalid Input");
}