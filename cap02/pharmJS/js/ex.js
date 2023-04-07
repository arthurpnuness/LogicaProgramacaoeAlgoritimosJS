
const form=document.querySelector("form")
const resp=document.querySelector("h3")
const resp2=document.querySelector("h4")

form.addEventListener("submit", (e) => {

    const md=form.med.value
    const num=Number(form.num.value)

    const sum=(num+num)-1

    resp.innerText= `Promotion of ${md}`
    resp2.innerText= `Take two for just R$${sum}`

    e.preventDefault()
})
