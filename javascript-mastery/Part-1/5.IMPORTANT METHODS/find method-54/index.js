// find method
// Definition and Usage

// The find() method returns the value of the first element that passes a test.

// The find() method executes a function for each array element.

// The find() method retuns undefined if no elements are found.

// The find() method does not execute the function for empty elements.

// The find() method does not change the original array.



const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12


/* function isLength3(string){
   return string.length===3;
}

const ans = isLength3("doggy");
console.log(ans); //false
const ans2 = isLength3("dog");
console.log(ans2);// true */




// const myArray = ["hello", "cat", "dog", "lion"];
// const ans = myArray.find((string)=>string.length===3);
// console.log(ans); // cat


//realistic use of find method

const users = [
   {userId:1, userName:"Tutul"},
   {userId:2, userName:"Mohit"},
   {userId:3, userName:"Rohit"},
   {userId:4, userName:"Lohit"},
   {userId:5, userName:"Sohot"}
]


const findUser = users.find((user)=>user.userId===3);
console.log(findUser);






// Find an object in an array by one of its properties

const inventory = [
  {name: 'apples', quantity: 2},
  {name: 'bananas', quantity: 0},
  {name: 'cherries', quantity: 5}
];

// function isCherries(fruit) {
//   return fruit.name === 'cherries';
// }

// console.log(inventory.find(isCherries));


const isCherries = inventory.find((fruit)=>fruit.name==="cherries");
console.log(isCherries); // { name: 'cherries', quantity: 5 }




// Using arrow function and destructuring

const inventory2 = [
  {name: 'apples', quantity: 2},
  {name: 'bananas', quantity: 0},
  {name: 'cherries', quantity: 5}
];

// const result = inventory2.find( ({ name }) => name === 'cherries' );

const result = inventory2.find(({name})=> name=== "cherries");

console.log(result) // { name: 'cherries', quantity: 5 }




// Find a prime number in an array

// The following example finds an element in the array that is a prime number (or returns undefined if there is no prime number):

function isPrime(element, index, array) {
  let start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
console.log([4, 5, 8, 12].find(isPrime)); // 5
