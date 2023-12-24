// what is prototype
//_proto__ is the actual object that is used in the lookup chain to resolve methods, etc. The prototype property is only present for functions and is a property that's set only if you're using the 'new' keyword when creating objects with this (constructor) function.


function hello(){
    console.log("hello world");
}
// hello();
// javascript e function and function object dutoi ache
// function ===> function + object

// console.log(hello.name); // hello (function name)



// you can add your own properties
hello.myOwnProperties = "very unique value";
console.log(hello.myOwnProperties);//very unique value

// name property --> tells function name

// function provides more usefull properties ---> means call, apply, bind method bhi provide karta hai

// functions gives free spaces ---> actually free space bolte kichu hoi na, free space bolte empty object {} bojhano hoyeche and eta ke bola hoi prototype

// console.log(hello.prototype); //{constructor: ƒ}

// only function provide prototype property

/* 

function hello2(){
    console.log("hello world");
}

if(hello2.prototype){
    console.log("Prototype is present");
}
else{
    console.log("prototype is not present");
}
//output: Prototype is present */


const hello3 = {
    key1: "value1"
}

if(hello3.prototype){
    console.log("Prototype is present");
}
else{
    console.log("prototype is not present");
}
//output: prototype is not present



const hello4 = ["val1", "val2"];


if(hello3.prototype){
    console.log("Prototype is present");
}
else{
    console.log("prototype is not present");
}
//output: prototype is not present



hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";
hello.prototype.sing = function(){
    return "lalala";
};
console.log(hello.prototype); // {abc: 'abc', xyz: 'xyz', sing: ƒ, constructor: ƒ}

console.log(hello.prototype.sing()); //lalala