const btn = document.getElementById("submitBtn")
const svar = document.getElementById("placeholder")


btn.addEventListener("click", function() {
    const inputEL = document.getElementById("input-el")
   if (inputEL.value) {
    let sum = [...`${inputEL.value}`].reduce((a, b) => +a + +b)
    svar.innerHTML += `${sum}, `
    inputEL.value = ""
   }
   
})

