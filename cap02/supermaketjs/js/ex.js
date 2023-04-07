

const product=document.querySelector("form")
const resp1=document.querySelector("h2")
const resp2=document.querySelector("h3")

form.addEventListener("submit", (e) => {
    const product=(form.in_product.value)
    const discount=Number(form.in_price.value)
    const disc= price+price

    const precoPromocional = disc / 2;

    resp1.innerText=`${product} - Promotion: Take 3 per R$ ${disc}`

    resp2.innerText=`The 3rd product costs only R$3.00`

    e.preventDefault()

})