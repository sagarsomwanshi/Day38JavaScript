const stake = 100;
const betValue = 1;

let remainingMoney = stake;
let numberOfWins = 0;
let numberOfBets = 0;

while (remainingMoney < 200 && remainingMoney > 0) {
    numberOfBets++;
    let betResult = Math.floor(Math.random() * 2);
    if (betResult == 1) {
        remainingMoney += betValue;
        numberOfWins++;
    }
    else {
        remainingMoney -= betValue;

    }
}

console.log("Number of bets made ", numberOfBets)
if (remainingMoney == 0) {
    console.log("player lost")

}
else {
    console.log("player won")
    console.log("games won ", numberOfWins)

}