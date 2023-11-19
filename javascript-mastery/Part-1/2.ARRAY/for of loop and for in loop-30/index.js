// for of loop
// for of loop uses to iterate array 
//  const fruits = ["apple", "banana", "mango"];
//   const fruits2 = [];
//   for(let fruit of fruits){
//       fruits2.push(fruit);
//   }
//   console.log(fruits2);


// for in loop
// for in loop uses to iterate object 

const fruits = ["apple", "banana", "mango"];
const fruits2 =[];
for(let index in fruits){
    // console.log(index); // print index no
    // console.log(fruits[index]); // apple, banana, mango
    fruits2.push(fruits[index].toUpperCase());
}
console.log(fruits2);







const details = {name: "Tutul Kabir", age:29, job: "Web Development"};

for(let x in details){
    // console.log(x);
    // console.log(details[x]);
   console.log(`${x}:${details[x]}`)
}