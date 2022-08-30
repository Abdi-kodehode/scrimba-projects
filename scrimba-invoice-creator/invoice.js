const cart = []
const carBtn = document.getElementById("wash-car-btn")
const lawnBtn = document.getElementById("mow-lawn-btn")
const weedBtn = document.getElementById("pull-weeds-btn")
const displayService = document.getElementById("display-services")
const displayTotal = document.getElementById("display-total")
const sendBtn = document.getElementById("send-btn")

carBtn.addEventListener("click", function() {
    const purchase = {
        service: "Wash Car",
        value: 10
    }
    cart.push(purchase)
    carBtn.disabled = true
    calculateTotal()
    shoppingCart()
})

lawnBtn.addEventListener("click", function() {
    const purchase = {
        service: "Mow Lawn",
        value: 20
    }
    cart.push(purchase)
    lawnBtn.disabled = true
    calculateTotal()
    shoppingCart()
})

weedBtn.addEventListener("click", function() {
    const purchase = {
        service: "Pull Weeds",
        value: 30
    }
    cart.push(purchase)
    weedBtn.disabled = true
    calculateTotal()
    shoppingCart()
})

sendBtn.addEventListener("click", function(){
    cart = []
    displayTask.innerHTML = ""
    displayTotal.innerHTML = ""
    carBtn.disabled = false
    lawnBtn.disabled = false
    weedBtn.disabled = false
})

const shoppingCart = () => {
    let display = ""
    for (let i = 0; i < cart.length; i++) {
        display += `
            <div class="service-container">
                <div class="service-name">${cart[i].service}</div>
                    <button class="remove-item" onclick="removeItem(${cart.indexOf(cart[i])})">Remove</button>
                <div class="service-value">$${cart[i].value}</div>
            
            </div>
        `
        displayService.innerHTML = display
    }
}

const calculateTotal = () => {
    let calSum = 0
    let amountDisplay = ""
    for( let i = 0; i < cart.length; i++) {
        calSum += cart[i].value
        amountDisplay = `
            <p class="payment-message">We accept cash, credit card, or paypal</p>
            <div class="total-value"><span>$</span>${calSum}</div>
        
        `
        displayTotal.innerHTML = amountDisplay
    }
}

function removeItem(index) {
    cart.splice(index, 1)
    shoppingCart()
    calculateTotal()
    cart.splice(index, 0)
}







