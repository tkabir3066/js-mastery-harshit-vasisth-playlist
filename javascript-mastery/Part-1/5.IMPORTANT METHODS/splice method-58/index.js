//splice method
// splice method changes original array
//start , delete, insert
//The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it, see slice(). 

const myArray = ["item1", "item2", "item3"];

// how to delete
// arr.splice(startingIndex, how many element);
//  myArray.splice(1,1);
//  console.log(myArray); //Array [ "item1", "item3" ]




// how to insert
// // arr.splice(startingIndex, how many element, "abc");
// myArray.splice(1,0, "tutul");
// console.log(myArray);  //Array(4) [ "item1", "tutul", "item2", "item3" ]




// insert and delete together
myArray.splice(1,2,"anarul","mridul");
// console.log(myArray);//Array(3) [ "item1", "anarul", "mridul" ]
  
  

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]



//Return value

// An array containing the deleted elements.

// If only one element is removed, an array of one element is returned.

// If no elements are removed, an empty array is returned.


const arr = ["ph1","ph2","ph3", "ph4"];
const deletedItem = arr.splice(2,1);
console.log(`deleted item =  ${deletedItem}`); // deleted item =  ph3