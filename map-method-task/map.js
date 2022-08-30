//fullfør .map method funksjonen:
//hvis tallet er over 50, return tallet ganget med 5,
//hvis tallet er under 50, return tallet ganget med 10

const numArray = [32, 11, 4, 67, 97, 61, 52, 12, 26, 8, 70, 23]
 
const mappedArray = numArray.map((num) => {
    if (num > 50) 
        return num * 5
    else 
        return num * 10
})
 
console.log(mappedArray)

//-------------------------------------------------------------------------

const fruits = [
    "Banana",
    "Apple",
    "Pear",
    "Mango",
    "Melon",
    "Pineapple",
    "Grapes",
    "Peach",
  ];
  
  // Complete the .map method to return 1 random character from each element in uppercase
  
  const mappedFruits = fruits.map((element) => {
    return element.charAt(Math.floor(Math.random() * element.length)).toUpperCase()
  });
  
  console.log(mappedFruits);
  
  // This should log something like this:
  
  // (8) ['A', 'P', 'E', 'M', 'E', 'E', 'R', 'H']


//--------------------------------------------------------------------------------------


const people = [
  {
    name: "Thomas",
    male: true,
    age: 23,
    hobbies: ["cycling", "football", "pool"],
  },
  {
    name: "Susan",
    male: false,
    age: 26,
    hobbies: ["jogging", "travelling", "dancing"],
  },
  {
    name: "Monica",
    male: false,
    age: 21,
    hobbies: ["skateboarding", "guitar", "concerts"],
  },
  {
    name: "Avery",
    male: true,
    age: 28,
    hobbies: ["coding", "games", "memes"],
  },
  {
    name: "Phillip",
    male: true,
    age: 24,
    hobbies: ["boxing", "wrestling", "mma"],
  },
];
 
// Complete the .map method on the people array to return the following sentence for each element:
// "Thomas is a 23 year old man, and he likes pool among other things"
// For females, it should read: "..year old woman, and she likes.."
// the hobby in the sentence should be a randomly chosen one from the hobby array.
// HINT: Use Template Literals (Google it if unsure)
 
const mappedPeople = people.map(element => {
  const random = Math.floor(Math.random()*element.hobbies.length)
  const randomHobby = element.hobbies[random]

  if (element.male === true) 
    return `${element.name} is a ${element.age} year old man, and he likes ${randomHobby} among other things`  
  else
    return `${element.name} is a ${element.age} year old female, and she likes ${randomHobby} among other things` 

})
 
console.log(mappedPeople)
 
// This should log something like this:
 
// (5)[
//   ("Thomas is a 23 year old man, and he likes football among other things",
//   "Susan is a 26 year old woman, and she likes dancing among other things",
//   "Monica is a 21 year old woman, and she likes skateboarding among other things",
//   "Avery is a 28 year old man, and he likes coding among other things",
//   "Phillip is a 24 year old man, and he likes mma among other things")
// ];


