



function passwordGenerator() {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&/'()*+,-./:;<=>?@[\\]^_`{|}~"
    let passwordLength = 12
    let password = ""

    for (let i = 0; i <= passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNumber, randomNumber + 1)
    }
    return password
}

function running4Times() {
    document.getElementById('pss-1').value = passwordGenerator()
    document.getElementById('pss-2').value = passwordGenerator()
    document.getElementById('pss-3').value = passwordGenerator()
    document.getElementById('pss-4').value = passwordGenerator()
}


let copyText = document.querySelector("#pss-1")
copyText.addEventListener('click', function(event) {
    let copyTextarea = document.querySelector('.box-1');
    copyTextarea.focus();
    copyTextarea.select();
})
    
    



function clearPassword() {
    let grab = document.querySelectorAll("#pss-1, #pss-2, #pss-3, #pss-4")
    for (let i = 0; i < grab.length; i++) {
        if (grab[i].value !="") {
            grab[i].value = "";
        }
    }
      
}
