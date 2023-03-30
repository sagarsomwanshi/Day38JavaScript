

    let num1= Number(prompt("Please enter the first number of range"));
    let num2= Number(prompt("Please enter the last number of range"));
    
    console.log("Prime numbers in range "+num1+ " and " +num2+"are");

    for(let i =num1 ;i<=num2;i++){
        let primeCheck=0;
        for(let j=2; j<=i/2; j++){
            if(i%j === 0){
                primeCheck = 1;
                break;
            }
        }
        if(primeCheck === 0 )
            console.log(i);
    }
