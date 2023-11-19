/*  
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
const newAnimals= animals.slice(1,3);
//  console.log(newAnimals);// Array [ "bison", "camel" ]
const newAnimals2= animals.slice(2);
console.log(newAnimals2);// Array(3) [ "camel", "duck", "elephant" ]
const newAnimals3= animals.slice(2,4);
// console.log(newAnimals3);// Array(3) [ "camel", "duck", ]
const newAnimals4= animals.slice(1,5);
// console.log(newAnimals4);


//A negative index can be used, indicating an offset from the end of the sequence. slice(-2) extracts the last two elements in the sequence. 
const newAnimals5= animals.slice(-2);
console.log(newAnimals5); //Array [ "duck", "elephant" ] 

//  console.log(animals); //Array(5) [ "ant", "bison", "camel", "duck", "elephant" ]

*/


const animals = ["ant", "Elephant" , "Bison", "camel", "duck", "deer"];

const newAnimals= animals.slice(1,3);
console.log(newAnimals);

const newAnimals2 = animals.slice(2);
console.log(newAnimals2)


const newAnimals3 = animals.slice(2,4);
console.log(newAnimals3)

const newAnimals4 = animals.slice(2,5);
console.log(newAnimals4)

const newAnimals5 = animals.slice(-5);
console.log(newAnimals5);



//  let firstName = "Tutul";
// firstName = firstName.toUpperCase();
// console.log(firstName);


let firstName = "TuTuL";
firstName = firstName.toLowerCase();
console.log(firstName);


let country = "bangladesh";
country = country.slice(3,7);
console.log(country)