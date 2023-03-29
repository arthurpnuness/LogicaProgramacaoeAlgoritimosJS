
//creates reference to the form and the elements h3 and h4
const form=document.querySelector("form")
const resp1=document.querySelector("h3")
const resp2=document.querySelector("h4")

//creates an event ''listener'', triggered when the submit button is clicked
form.addEventListener("submit", (e)=>{
    const title=form.inTitle.value   //get contents of fields
    const duration=Number(form.inDuration.value)

    const hours=Math.floor(duration/60)//round down result
    const minutes= duration%60 //get the remainder of the division

    resp1.innerText= title //displays the answers
    resp2.innerText=`${hours} hours and ${minutes} minutes`

   e.preventDefault()      //avoid sending the form

})