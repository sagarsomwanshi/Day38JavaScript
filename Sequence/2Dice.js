
const dice = ()=>{
   return (Math.floor(Math.random()*6)+1);
}
let dice1 = dice();
console.log("Dice 1 :",dice1)
let dice2 = dice();
console.log("Dice 2 :",dice2)

console.log("Sum of 2 dice Roll :",dice1 + dice2);
