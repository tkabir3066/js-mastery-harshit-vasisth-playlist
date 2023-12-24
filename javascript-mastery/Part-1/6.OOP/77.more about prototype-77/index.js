// prototype sudhu function er khetre hoi

let numbers = [1,2,3];
// console.log(Object.getPrototypeOf(numbers));
console.log(Array.isArray(Array.prototype)) // true


function hello(){
    console.log("hello");
}
hello.prototype = [];
console.log(hello.prototype);
hello.prototype.push('1'); // Array [ ]
console.log(hello.prototype); //Array [ "1" ]