// Oppgave 1
//sjekk om en lengre tekst du finner på nettet er over en wordcount (antall tegn) du velger selv.
let text = "This is a book about instructing computers. Computers are about as common as screwdrivers today, but they are quite a bit more complex, and making them do what you want them to do isn’t always easy. If the task you have for your computer is a common, well-understood one, such as showing you your email or acting like a calculator, you can open the appropriate application and get to work. But for unique or open-ended tasks, there probably is no application. That is where programming may come in. Programming is the act of constructing a program—a set of precise instructions telling a computer what to do. Because computers are dumb, pedantic beasts, programming is fundamentally tedious and frustrating. Fortunately, if you can get over that fact, and maybe even enjoy the rigor of thinking in terms that dumb machines can deal with, programming can be rewarding. It allows you to do things in seconds that would take forever by hand. It is a way to make your computer tool do things that it couldn’t do before. And it provides a wonderful exercise in abstract thinking."


textLength(text)


function textLength(lengde){
  if (lengde.length > 100){
    console.log("tekst er lengere enn 100 length")
  }else {
    console.log("tekst er kortere enn 100 length")
  }

}


// Oppgave 2
// lag en loop som teller til 10

for (let n = 0; n < 11; n++){ 
  console.log("n er " + n)
}



// Oppgave 3
// finn ordene "if", "as", "and" i teksten du valgte og kutt ut de ordene pluss 5 tegn på hver side av ordene. Det trengs bare første instance av ordene.

function minusFem(sokeord){
  let ord = text.indexOf(sokeord)
  indexFirst = ord - 5
  sluttIndex = ord + sokeord.length + 5
  totalTekst = text.slice(indexFirst, sluttIndex)
  return totalTekst
}

let ifOrd = minusFem("if")
console.log(ifOrd)
let asOrd = minusFem("as")
console.log(asOrd)
let andOrd = minusFem("and")
console.log(andOrd)



// Oppgave 4 
// sett sammen de nye stringene dine.
let nySetning = ifOrd.concat(asOrd, andOrd)
console.log(nySetning)

// Oppgave 5
//  bytt ut ordene ("if"/"hvis", "is"/"som", "and"/"og") med norkse/engelske ord i den nye teksten din.

let nySetning2 = nySetning.replace("if", "HVIS").replace("as", "SOM").replace("and", "OG")
console.log(nySetning2)


// Oppgave 7
// Lag en array med 10 ord og en med 10 tall.

let ordArray = "ti lange sure tær har vi ja nei kanskje ikke"
for (let i = 0; i < 1; i++){
  console.log(ordArray.split(" "))
}
let tallArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// Oppgave 8
// Sett alle tallene i arrayet med 10 tall til å bli det samme. Dette skal gjøres vha en built in method og en loop. Et tall skal endres fo hver iteration av loopen. Det første og det siste tallet i arrayet skal forbli uendret.

for(let arrayStart = 1; arrayStart + 1 < tallArray.length; arrayStart++){
  tallArray.fill(3.14, arrayStart, arrayStart + 1)
  console.log(tallArray)
}




// Oppgave 6
// lag et lite spill hvor spilleren har 3 liv. Hint: while loops





function terning(){
  return Math.floor(Math.random() * 6) + 1
}

// console.log(terning())
let teller = 0
let sjanse = 3
let user = window.prompt("Du har 3 sjanser til å gjette rett terning kast. Er du klar for å spille? y/n")

if (user === "y") {
  while (sjanse > 0 || teller < 3) {
    let terningkast = terning()
    let gjett = window.prompt("Gjett et tall mellom 1 - 6")

    if (gjett === terningkast) {
      console.log("Du har " + sjanse + " sjanse igjen")
      continue       
    }
    else if (gjett !== terningkast) {
      sjanse--
      console.log("Du har " + sjanse + " sjanse igjen") 
    }
    teller++
  }    
}
else{
  console.log("Ha det bra")
}