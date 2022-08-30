const names = [
    "Bradley",
    "Mae",
    "Oscar",
    "Isac",
    "Alexandra",
    "Margie",
    "Rob",
    "Clay",
    "Timothy",
    "Kennedy",
    "Rita",
    "Scott",
    "Sarah",
    "Felicia",
    "Gill",
    "Gavin",
    "Nellie",
    "Hope",
  ]
  
  const hobbies = [
    "cycling",
    "football",
    "pool",
    "jogging",
    "travelling",
    "dancing",
    "movies",
    "coffee",
    "skateboarding",
    "guitar",
    "concerts",
    "Dancing",
    "movies",
    "coding",
    "games",
    "Books",
    "memes",
    "electronics",
    "dancing",
    "boxing",
    "wrestling",
    "mma",
    "gym",
    "cycling",
    "football",
    "pool",
    "tv",
    "writing",
    "piano",
    "books",
    "opera",
  ]
  
  // Use whatever tools you deem necessary to accomplish the following:
  
  // Generate an object for each name in the names array formatted as follows:
  // {
  //     name: (the name from the name array),
  //     age: (generate a random age from 18-50),
  //     hobbies: (randomly generate an array of 3 hobbies from the hobbies array. PS make
  //               sure the hobbies are 3 unique ones)
  // }
  
  // example:
  
  // {
  //     name: "Scott"
  //     age: 31
  //     hobbies: ["books", "electronics", "guitar"]
  // }
  
  // Place these objects into an array.
  
  // PS: The hobbies array has to be cleaned up! Write code to remove duplicates before using it.
  // Beware the capitalized duplicates as well.
  
  // Good luck!

let hobbies2 = hobbies.map(element => {return element.toLowerCase()})
hobbies2 = [...new Set(hobbies2)]
console.log(hobbies2)



const personelFile = []


for (let i = 0; i < names.length; i++) {
    personelFile.push({
        name: names[i],
        age: randomAge(18, 50),
        hobby: randomHobbies(hobbies2, 3)
    });
}



 console.log(personelFile)

 function randomHobbies(array, number) {
  const blandSorter = [...array].sort(() => 0.5 - Math.random());

  return blandSorter.slice(0, number);
}

function randomAge(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}  

