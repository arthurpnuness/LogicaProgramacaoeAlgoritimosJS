

const prompt=require("prompt-sync") () // add the package to the program
const wage=Number(prompt("Wage R$: ")) //read the input data
const time=Number(prompt("Time (years): "))

const quadrenniums=Math.floor(time/4) //calculate quadrenniums
const additions=wage*quadrenniums/100 //...and additional

console.log(`Quadrenniums: ${quadrenniums}`) //...display the answers
console.log(`Final salary: ${(wage+additions).toFixed(2)}`) 