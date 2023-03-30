let number = Number(prompt("Enter any positive number: "));
let primeCheck = 0;
    
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            primeCheck = 1;
            break;
        }
    }

    if (primeCheck === 1) {
        
        console.log("number is a not prime number");
    } else {
        console.log("Number is a prime number");
        
    }