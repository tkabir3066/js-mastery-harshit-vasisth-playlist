
const fruits = ["mango", "lichi", "orange", "pears", "lemon"];

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);
// console.log(fruits[4]);


fruits[0] = "guava";
console.log(fruits);


let arr = Array.isArray(fruits);
console.log(arr);


let obj = {};
console.log(Array.isArray(obj));



const mixed = [1,2,5, "romio", ["sahikl", "jubayer"], null, undefined, NaN];
console.log(mixed);