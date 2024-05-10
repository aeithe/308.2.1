const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;
const plantSpace = 0.8; 
const totalAmountofPlants = area / plantSpace;
const startingPlantAmmount = 20; 
const startingPlants2 = 100;
const noPruningWeeks = 10;

//calculating total amount of plants possible in starting area
//console.log(totalAmountofPlants);

//if # of plants are doubled each week then 2nd week then starting area
//total # of plants cannot exceeed 98 

//const weekCoefficient = 2; 
//let weekNum = 0;

function weeklyPlantCalc (weekNum){
      console.log();
      const plantCount = startingPlantAmmount * Math.pow(2,weekNum);

      if (plantCount > totalAmountofPlants * 0.8){
        console.log(`Week ${weekNum}: The plants need to be pruned this week.`);        
      } else if (plantCount >= totalAmountofPlants * 0.5 && 
                 plantCount <= totalAmountofPlants * 0.8
      )
      {console.log(`Week ${weekNum}: The plants are growing at an acceptable rate.`);
    }
        else{ console.log(`Week ${weekNum}: There is room in the garden for plants to be planted.`);}    
    
    }

    weeklyPlantCalc(1); //Simulates growth for week #1
    weeklyPlantCalc(2); //Simulates growth for week #2
    weeklyPlantCalc(3); //Simulates growth for week #3


const plantCount2 = startingPlants2 * Math.pow(2,10);
const requiredSpace = plantCount2 * plantSpace

function additionalSpace(){

  let newRadius = 0;
  let increment = 0.01; 
  let currentArea = 0;

  while (currentArea <requiredSpace) {
    newRadius += increment; 
    currentArea = PI*newRadius*newRadius;
    
    newRadius -= increment;
    
  console.log (`After 10 weeks, with 100 starting plants, the required space is ${requiredSpace} sq meters and the new radius is ${newRadius.toFixed(2)} meters.`);
  }
}

additionalSpace();

function gardenCapacity(){
try {
  if (requiredSpace > area){
    throw new Error("Not enough space for the desired number of plants.");
  }
  console.log(
    "There is enough space in the garden for the plants.");
}
catch (error){
  console.log(error.message);
}
}
gardenCapacity();

    //ignore what's below this line!!!!
//change number inside parenthesis to whatever week number you want to fix    
//weeklyPlantCalc(2);

//if (weekNum <3){
   // console.log("The plants all fit inside the starting area at this time and more can be planted")
//}
//if (weekNum=3){
    //console.log("The plants")
//}
//else {
 //   console.log("The plants will not fit inside the starting area at this time")
//}

//const pruned = totalAmountofPlants*.80;
//const planted = totalAmountofPlants*.50;

//console.log(pruned, planted);

//ignore what's above this line!!!

//second problem in assignment below:

















