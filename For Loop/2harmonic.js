let n = Number(prompt("Enter a number to harmonic value"));
let harmonic =0;
    for (let i =1; i<=n ;i++) {

        let calculate = 1/i;
        harmonic = harmonic + calculate;
            
    }
    console.log("Harmonic value of ",n," : ",harmonic);  