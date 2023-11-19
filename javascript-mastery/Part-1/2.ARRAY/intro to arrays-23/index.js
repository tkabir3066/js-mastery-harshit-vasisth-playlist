
// intro to arrays
//array are reference type(all reference type are object) // so arrays are object
// reference type vs premitive type
// how to create arrays
// array = collection of elements // ordered(index) collection of items
// array indexing
  
   let fruits = ["apple", "banana", "mango"];
//    console.log(fruits[0]); // apple
//    console.log(fruits[1]); // banana
//    console.log(fruits[2]); // mango
    fruits[1] = "pears";
    // console.log(fruits);
    console.log(typeof fruits); // object

    let arr = Array.isArray(fruits); // array na aaray noy ta check korar jonno ei method use korte hoi
    console.log(arr); // true

    let obj = {}; // object literal
    console.log( Array.isArray(obj)); // false

   let numbers = [1,2,3,4];
//    console.log(numbers);
   let mixed = [1, 2, 2.4, "tutul",  null, undefined]; // we can store any data type in arrays // we can store array inside arrays
//    console.log(mixed);

 
 




let numOne = 50;
let numTwo = numOne; //numTwo=numOne=50
numOne = 100;
console.log(numOne); //outputs 100
console.log(numTwo); //outputs 50



// let object1 = {
//     name:'Bingeh',
//     age:18
//     };
//     let object2 = object1;
    
//     //updating object1,
//     object1.age = 20;
    
//     console.log(object2); //we see that object2 also updates the age attribute



