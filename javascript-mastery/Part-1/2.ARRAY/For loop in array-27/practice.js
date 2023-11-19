
const fruits = ["apple", "banana", "pears", "guava"];

console.log(fruits[fruits.length-1]);


// for(let i=0; i<fruits.length; i++){
//     console.log(fruits[i].toUpperCase());
// }



let fruits2 = [];
for(let fruit of fruits){
    fruits2.push(fruit.toUpperCase());
};

console.log(fruits2);