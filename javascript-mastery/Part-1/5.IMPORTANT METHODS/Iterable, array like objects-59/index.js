//Iterables
// jispe hum for of loop laga sakte hai
// string, array are iterable
// Iterable objects are objects that can be iterated over with for..of.
// Technically, iterables must implement the Symbol.iterator method.




// Iterating Over a String
// You can use a for..of loop to iterate over the elements of a string:

// Create a String

const firstName = "Tutul";
for(let char of firstName){
  console.log(char);    
}


/* const name = "W3Schools";

// List all Elements
for (const x of name) {
  console.log(x);
}
 */

//Iterating Over an Array
// You can use a for..of loop to iterate over the elements of an Array:

// Create aa Array

const items = ["item1", "item2", "item3"];
for(let item of items){
  console.log(item);
}

/* 
const letters = ["a","b","c"];

// List all Elements

for (const x of letters) {
  // console.log(x);            //Iterate over an Array:
                              // a
                              // b
                              // c
} */






//-------------array like objects-----------------------//
//jinke pas length property hoti hai
// aur jinko hum index se access kar sakte hai
// Example :- string

const fName = "India";
console.log(fName.length); //5
console.log(fName[2]); //d 






   




