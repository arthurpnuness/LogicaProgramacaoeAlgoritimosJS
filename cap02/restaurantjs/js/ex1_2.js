
//creates reference to the form and the elements h3 (where will the answer be displayed)
const form=document.querySelector("form")
const resp=document.querySelector("h3")

//creates an event ''listener'', triggered when the submit button is clicked
form.addEventListener("submit", (e) => {
    const quilo=Number(form.in_quilo.value) //get contents of fields 
    const consumption=Number(form.in_consumption.value)

    const price=(quilo/1000)*consumption //round down result
    resp.innerText=`Amount to pay: ${price.toFixed(2)}` //calculate the amount to be paid

    e.preventDefault() //avoid sending the form
})