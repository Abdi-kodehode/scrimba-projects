// for loop
// Start - stop - step
let firstname = ["kriz", "kroz"];
let names = "kriz, kroz";

for (let i = 0; i <= firstname.length - 1; i++) {
  // break stops if correct, replace witrh continue to skip selected item
  if (firstname[i] === "kriz") break;

  console.log(firstname[i]);
}

// Show all odd numbers
for (let i = 100; i > 0; i--) {
  if (i % 2 === 0) continue;
  console.log(i);
}

// for of loop

for (let name of firstname) {
  console.log("hello " + name);
}

for (let [i, v] of firstname.entries()) {
  console.log(i, v);
}

for (let char of names) {
  console.log(char);
}

// object - key valued
let person = { name: "Frank", age: 28, town: "Stvg" };

// for in loop
// get key values
for (const key in person) {
  console.log(key);
}
for (const key in person) {
  console.log(`${person[key]}`);
}

// while loops
let i = 0;
while (i <= 10) {
  console.log("Tallet er: " + i);
  i++;
}

// Do while loop - Kjøres en gang etter loop er kjørt

do {
  console.log(i);
  i++;
} while (i === 100);
{
}

// Methods examples below:

// numbers
let num = 3.1456789;
console.log(num);
// lage fra nummer til string
console.log(num.toString());

let num2 = 232322222323;
console.log(num2.toExponential());

let num3 = 232.322222323;
console.log(num3.toFixed(2));
console.log(num3.toPrecision(8));

// lage fra string til tall - hele tall og desimal tall
let numstring = 65;
let numstring2 = 65.4444;
console.log(parseInt(numstring));
console.log(parseFloat(numstring2));

// Methods på strings tekst
let str = "Kodehode kicks azz";
let str2 = "WHat da fuckz";
console.log(str.length); // length er properties
console.log(str.slice(4, 11));
console.log(str.replace("o", "x")); //bytter ut første o med x
console.log(str.replace(/O/gi, "x")); // regex , i betyr se bort fra store/små bokstaver, g ser igjennom hele tekst ikke bare førstr instance
console.log(str.toUpperCase()); // Sette alt til store bokstaver
console.log(str.concat(str2, " hei")); //kombinere str og str2 + hei teksten
console.log(str.trim()); //fjerner whitespace fra slutt
console.log(str.charAt(2)); // finn tegn på posisijon 2 - d
console.log(str.split(" ")); // Lage array, veld seperator, her med space for seperator

// Arrays

let arr = ["Endre", "Joe", "May", "kriz"];
arr.pop(); //fjern siste på array
arr.push("Torje"); // legg til sist i array
console.log(arr.toString());
console.log(arr.join(", "));
arr.shift(); //fjerner første og flytter items opp
console.log(arr);
arr.unshift("Chris"); //legger til først i array og flytter alle ned
console.log(arr);
console.log(arr.length); //vise lengde på array, items

arr.splice(2, 0, "Test"); //legge til element, her legge til 2 Test fra id 2
console.log(arr);
console.log(arr.reverse()); //snu array rekkefølge

console.log("Aardvark" < "Zoroaster");
console.log("Itchy" != "Scratchy");
console.log("Apple" == "Orange");
console.log(NaN == NaN); //only value in js that is not equal to self.. NaN (NotaNumber)

// Other side effects
console.log(Math.max(2, 4)); //math.max shows the largest value
console.log(Math.min(2, 4) + 100); //Math.min shows the smallest value, then adds 100 in this expression

// theNumber = Number(prompt("Pick a number")); // The function Number converts a value to a number then asks for a number then use that number to find square root of it
//console.log("Your number is the square root of " + theNumber * theNumber);

// let theNumber = Number(prompt("Pick a number")); //The Number.isNaN function is a standard JavaScript function that returns true only if the argument it is given is NaN. The Number function happens to return NaN when you give it a string that doesn’t represent a valid number. Thus, the condition translates to “unless theNumber is not-a-number, do this”.
// if (!Number.isNaN(theNumber)) {
//   console.log("Your number is the square root of " + theNumber * theNumber);
// } else {
//   console.log("please enter a number");
// }

let theNumber2 = Number(2);
console.log(!Number.isNaN(theNumber2)); //if given a number returns true, if given a string gives a fault