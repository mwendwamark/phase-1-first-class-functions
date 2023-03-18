function monday(){
    console.log("Play pes with friends")
    console.log("Do my labs")
}
function tuesday(){
    console.log("Take a shower")
    console.log("Go to the gym")
}
function wednesday(){
    console.log("Take a shower")
    console.log("Do my Labs")
}
function takeAShower(){
    console.log("Take a shower") 
}
function labs(){
    console.log("Do my labs") 
}
function gym(){
    console.log("Go to the gym")
}
function receivesAFunction(drinkWater){
    takeAShower(); 
    drinkWater();
}

function monday(){
   receivesAFunction(labs) 
}
function receivesAFunction(drinkWater){
    takeAShower();
    drinkWater();
}
receivesAFunction();
function returnsANamedFunction(){
    return function book(){
       console.log("Read a notes on Javascript") 
    }
}
function returnsAnAnonymousFunction(){
    return()=>{console.log("Go visit my grandparents")}
}
 