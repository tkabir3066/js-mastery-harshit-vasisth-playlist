// primitive vs reference data type
// primitive data stores in stack






// A variable can hold one of two value types: primitive values or reference values.

//     Primitive values are data that are stored on the stack.
//     Primitive value is stored directly in the location that the variable accesses.
//     Reference values are objects that are stored in the heap.
//     Reference value stored in the variable location is a pointer to a location in memory where the object is stored.
//     Primitive types include Undefined, Null, Boolean, Number, or String.

// The Basics:

// Objects are aggregations of properties. A property can reference an object or a primitive. Primitives are values, they have no properties.

// Updated:

// JavaScript has 6 primitive data types: String, Number, Boolean, Null, Undefined, Symbol (new in ES6). With the  exception of null and undefined, all primitives values have object equivalents which wrap around the primitive values, e.g. a String object wraps around a string primitive. All primitives are immutable.



// primitive types

  let num1 = 6;
 
  let num2 = num1;

  console.log("num1 =", num1);
  console.log("num2 =", num2);
  num1++;

  // after increment value of num1 and num2
  console.log("num1 is ", num1); //7
  console.log("num2 is ", num2);//6


  // reference type
//   array is reference type

let array1 = ["item1", "item2"];
let array2 = array1;
console.log('array1 = ', array1);
console.log('array2 = ', array2);

array1.push("item3");

console.log("after pushing element to array 1");
console.log('array1 = ', array1);
console.log('array2 = ', array2);