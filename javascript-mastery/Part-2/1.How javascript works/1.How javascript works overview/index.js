// compilation
// code execution
// why compilation


// How javascript code executes?


// what is global execution context  ?
// what is local execution context ?
// closures

// console.log(this);
// console.log(window);
// console.log(firstName);
// var firstName = "Tutul";

console.log(this);
console.log(window);
console.log(myFunction); // function myFunction()
console.log(fullName); // undefined




function myFunction(){
    console.log("this is my function");
}


var firstName = "Tk";
var lastName = "kabir";
var fullName = firstName + ' ' + lastName;

console.log(fullName); // Tk kabir