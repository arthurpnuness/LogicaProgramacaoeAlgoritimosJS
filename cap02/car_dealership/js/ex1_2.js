
    //creating reference to form and response elements

    const form=document.querySelector("form")
    const resp1=document.querySelector("#outResp1");
    const resp2=document.querySelector("#outResp2");
    const resp3=document.querySelector("#outResp3");

    //creating an event "listener", triggered when the submit button is pressed

    form.addEventListener("submit", (e) => {
        const vehicle=form.in_vehicle.value
        const price=Number(form.in_price.value) //get the contents of the commands

        const prohibited= price*0.50 //calculate the input value
        
        const portion=(price*0.50)/12 //...and the plots

        resp1.innerText=`Promotion ${vehicle}` //displays the answers
        resp2.innerText=`Entry of R$: ${prohibited.toFixed(2)} `
        resp3.innerText=`+12x of R$: ${portion.toFixed(2)}`

        e.preventDefault()  //avoid sending the form
    })

