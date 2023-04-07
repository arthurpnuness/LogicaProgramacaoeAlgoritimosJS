


const form=document.querySelector("form")
const resp=document.querySelector("h2")

form.addEventListener("submit", (e) => {
    const inMin=Number(form.val_inMin.value)
    const usage=Number(form.usage_time.value)

    const num=Math.floor(inMin*usage)/4

    resp.innerText=`Amount to pay R$${num}`

    e.preventDefault()
})