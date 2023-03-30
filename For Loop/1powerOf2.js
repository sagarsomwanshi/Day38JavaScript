let n = Number(prompt("Enter a number upto which you want to print powers of 2"));
    for (let i =1; i<=n ;i++) {
        let power = Math.pow(2, i);
        console.log("2^",i," : ",power);       
    }
