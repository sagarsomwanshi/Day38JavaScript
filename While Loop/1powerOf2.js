
let n = Number(prompt("Enter a number: "));
let check = 0;

    while (check <= n) {
        let power = Math.pow(2, n)
        if(power <= 256) {
            console.log("2^" , n , " = " , power);
            break;
        } else {
            console.log("Maximum reached");
            break;
        }
        n++;
    }