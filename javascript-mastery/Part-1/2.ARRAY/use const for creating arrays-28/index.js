// use const for creating array
const fruits = ["apple", "mango"];
fruits.push("pear"); 

console.log(fruits);  

 // we can push in the array but cannot change the whole array
//  fruits = ["banana", "tj"];
//  console.log(fruits); //Uncaught TypeError: invalid assignment to const 'fruits'



let phone = ['iphopne', 'iball'];
phone = ['mts'];   // here we can replace the old one because we declare with let
console.log(phone);
