// fill method
// value, start , end
//The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array



/* const myArray = new Array(5).fill(-1);
console.log(myArray); //Array(5) [ -1, -1, -1, -1, -1 ]

const myArray1 = new Array(10).fill(-1);
console.log(myArray1); //Array(5) [ -1, -1, -1, -1, -1 ]

const myArray2 = new Array(10).fill(-2);
console.log(myArray2); //Array(5) [ -1, -1, -1, -1, -1 ] */



const myArray = [1,2,3,4,5,6,7,8];
// myArray.fill(value, startIndex, endIndex);
myArray.fill(0,3,6);
console.log(myArray); //Array(8) [ 1, 2, 3, 0, 0, 0, 7, 8 ]





const array1 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]

// fill with 5 from position 1
console.log(array1.fill(5, 1));
// expected output: [1, 5, 5, 5]

console.log(array1.fill(6));
// expected output: [6, 6, 6, 6]
