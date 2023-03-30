let number = Number(prompt("Enter a positive number: "));


function palindrome(x) {
    
    let reverse = Number(String(x).split('').reverse().join('')); 
    return reverse;
  }
  if(palindrome(number) === number){
    console.log("Number is palindrome");
  }
  else
  console.log("Number is not a palindrome");

  function prime(x){
    let primeCheck = 0;
    for (let i = 2; i < x/2; i++) {
        if (x % i === 0) {
            primeCheck = 1;
            break;
        }
    }

    if (primeCheck === 1) {
        
        console.log("number is a not prime number");
    } else {
        console.log("Number is a prime number");
        
    }
  }
  prime(number);
  