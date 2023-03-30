const inchToFeet = (inch)=>{
return inch/12;
}

console.log("42 inch in Feet : ",inchToFeet(42)," Feet");

const feetToMeter =(feet) =>{
    return feet*0.3048;
}

console.log("Rectangular plot of 60 feet X 40 feet in Meters : ",feetToMeter(60),"Meter X ", feetToMeter(40), "Meter ");

const meterToAcre = (meter) =>{
    return meter*0.000247;

}
let area = feetToMeter(60)* feetToMeter(40);

console.log( "25 such plots area : ", 25*(meterToAcre(area)),"Acre");