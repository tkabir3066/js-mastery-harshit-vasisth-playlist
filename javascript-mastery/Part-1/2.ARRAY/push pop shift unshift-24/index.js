// array push pop
// array shift unshift


//The push() method adds one or more elements to the end of an array and returns the new length of the array.
// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

let fruits = ["mango", "apple", "banana"];
// console.log(fruits);
 let push = fruits.push("pear");
console.log(push); //4
// console.log(fruits);



//The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
//The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
let poppedFruit =fruits.pop();
console.log(poppedFruit);// pear


// unshift-- add at starting
 
  fruits.unshift("pineapple");
  fruits.unshift("guava");
  console.log(fruits);

// shift- remove from starting 
  let removeFruit =  fruits.shift();
    console.log(removeFruit);// guava

    //shift and pop method not only remove they retuns also.
    // push and pop fast as compare as shift,umshift