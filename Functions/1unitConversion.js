let degToFar = (x)=>{
    let degF = (x*9/5)+32;
    return degF;
}

let farToDeg = (y)=>{
    let degC = (y-32)*5/9;
    return degC;
}


let option = Number(prompt("Enter 1 to convert Degree celcius to Faranheit \nEnter 2 to convert Faranheit to Degree Celcius" ));
    
     
    switch(option){
        case 1:
            let deg = Number(prompt("Enter Temperature in Degree Celcius from 0 - 100"));
            if(deg>=0 && deg<=100){
            console.log(`${deg} Degree Celcius to Faranheit is ${degToFar(deg)}`);
            }else{
                console.log("Invalid temparature");
            }
            break;

        case 2:

            let far = Number(prompt("Enter Temperature in Faranheit 32 - 212"));
            if(far>=32 && far<=212){
            console.log(`${far} Degree Celcius to Faranheit is ${farToDeg(far)}`);
            }else{
                console.log("Invalid temparature");
            }
            break;
             
        default:
            console.log("Invalid Option");   
    }





    