

const prompt=require("prompt-sync") () // add the package to the program

const car=prompt("Car: ")  // read the input data 

const price=Number(prompt("Price: ")) 

const input=price*0.50 // calculate the input value
const portion=(price*0.50)/12 // calculates the value of the installments

console.log(`Promotion: ${car}`)  //displays the answers
console.log(`Entry of R$: ${input.toFixed(2)}`) 
console.log(`+12 from R$: ${portion.toFixed(2)}`);


