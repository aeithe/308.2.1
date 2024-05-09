const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;
const plantSpace = 0.8; 
const totalAmountofPlants = area / plantSpace;
const startingPlantAmmount = 20; 
//calculating total amount of plants possible in starting area
//console.log(totalAmountofPlants);

//if # of plants are doubled each week then 2nd week then starting area
//total # of plants cannot exceeed 98 

const weekCoefficient = 2; 
let weekNum = 0;

function weeklyPlantCalc (weekNum){
        console.log(startingPlantAmmount * weekCoefficient **weekNum);
    }


//change number inside parenthesis to whatever week number you want to fix    
weeklyPlantCalc(2);

if (weekNum <3){
    console.log("The plants all fit inside the starting area at this time")
}
else {
    console.log("The plants will not fit inside the starting area at this time")
}

const pruned = totalAmountofPlants*.80;
const planted = totalAmountofPlants*.50;

console.log(pruned, planted);











