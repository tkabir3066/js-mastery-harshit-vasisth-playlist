// some method

//The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array. 



const numbers = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = numbers.some((number) => number % 2 === 0) ;

console.log(even);
// expected output: true


// realistic use of some method

const userCart = [
    {productId:1, productName: "mobile", price:12000},
    {productId:2, productName: "laptop", price:22000},
    {productId:3, productName: "tv", price:15000},
    {productId:4, productName: "macbook", price:250000}
]
// checks whether a cartItem price is greater than 100000
const checkPrice = userCart.some((cartItem)=> cartItem.price>100000);
console.log(checkPrice); // true

// Testing value of array elements

// The following example tests whether any element in the array is bigger than 10.

function isBiggerThan10(element, index, array) {
  return element > 10;
}

[2, 5, 8, 1, 4].some(isBiggerThan10);  // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true



// Testing array elements using arrow functions

// Arrow functions provide a shorter syntax for the same test.

[2, 5, 8, 1, 4].some(x => x > 10);  // false
[12, 5, 8, 1, 4].some(x => x > 10); // true





// Checking whether a value exists in an array

// To mimic the function of the includes() method, this custom function returns true if the element exists in the array:

/* const fruits = ['apple', 'banana', 'mango', 'guava'];

function checkAvailability(arr, val) {
  return arr.some(function(arrVal) {
    return val === arrVal;
  });
}

checkAvailability(fruits, 'kela');   // false
checkAvailability(fruits, 'banana'); // true
 */




// Checking whether a value exists using an arrow function
/* 
const fruits = ['apple', 'banana', 'mango', 'guava'];

function checkAvailability(arr, val) {
  return arr.some(arrVal => val === arrVal);
}

checkAvailability(fruits, 'kela');   // false
checkAvailability(fruits, 'banana'); // true */




// Converting any value to Boolean

/* const TRUTHY_VALUES = [true, 'true', 1];

function getBoolean(value) {
  'use strict';

  if (typeof value === 'string') {
    value = value.toLowerCase().trim();
  }

  return TRUTHY_VALUES.some(function(t) {
    return t === value;
  });
}

getBoolean(false);   // false
getBoolean('false'); // false
getBoolean(1);       // true
getBoolean('true');  // true
 */
