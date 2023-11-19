// for loop in array 

let fruits = ["apple", "mango", "grapes", "banana"];


console.log(fruits.length);
// console.log(fruits[fruits.length]); // undefined // because last index of fruit is 3... so it could be (fruits.length -1)
console.log(fruits[fruits.length -1]); // banana // formula of last index


for(let i=0; i<fruits.length; i++){
    // console.log(i);
    console.log(fruits[i]);
}

//  or 

// for(let i=0; i<=fruits.length -1; i++){
//     // console.log(i);
//     // console.log(fruits[i]);
//     console.log(fruits[i].toUpperCase());
// }



let fruits2 = [];
for(let i=0; i<=fruits.length -1; i++){
    // console.log(i);
    // console.log(fruits[i]);
     fruits2.push(fruits[i].toUpperCase());
}
console.log(fruits2);