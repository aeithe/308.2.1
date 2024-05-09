const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;
const plantSpace = 0.8; 
const totalAmountofPlants = area / plantSpace;
const startingPlantAmmount = 20; 
//calculating total amount of plants possible in starting area
//console.log(totalAmountofPlants);

//if # of plants are doubled each week then 2nd week then starting area
//not big enough to support more than 2 weeks of growth  bc 3 weeks = 80
//total # of plants cannot exceeed 98 

const weekCoificient = 2; 
let weekNum = 0;

function weeklyPlantCalc (weekNum){
        console.log(startingPlantAmmount * weekCoificient **weekNum);
    }

weeklyPlantCalc(1);





