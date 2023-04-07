

const prompt=require("prompt-sync") () // add the package to the program
const weightKg=Number(prompt("Ration weight (kg): ")) //read the input data 
const consumption=Number(prompt("Daily intake (gr): "))
const weightGr= weightKg*1000 // create auxiliary variable pesogr 

const duration=Math.floor(weightGr / consumption) //calculate the answers
const lefTover=weightGr%consumption 
console.log(`Duration: ${duration} days`) //output data
console.log(`Leftover: ${lefTover} Gr`) 