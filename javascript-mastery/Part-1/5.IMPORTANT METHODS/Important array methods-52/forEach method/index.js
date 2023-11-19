// forEach method

// const numbers = [1,2,3,4,5];

//  const myFunc = (number, index) =>{
//      console.log(`index is ${index} and number is ${number}`);
//      console.log(`${number}*2 = ${number*2}`);
//  }

//   for(let i=0; i<numbers.length; i++){
//       myFunc(numbers[i], i);
//   }


  // forEach will be taken callback as input


  const numbers = [1,2,3,4,5];

 const myFunc = (number, index) =>{
     console.log(`index is ${index} and number is ${number}`);
    //  console.log(`${number}*2 = ${number*2}`);
 }

 numbers.forEach(myFunc)



//  const numbers = [1,2,3,4,5];

//  numbers.forEach((number, index)=>{
//     console.log(`index is ${index} and number is ${number}`);
//  })



// const numbers = [1,2,3,4,5];
// numbers.forEach((number, index)=>{
//     console.log(number*2, index); 
// })



// realistic uses of forEach

const users = [
    {name: "Tutul Kabir", age:29},
    {name: "Anarul Kabir", age:25},
    {name: "Atif Ali", age:22},
    {name: "AYan Ali", age:20},
    {name: "Mahira Ali", age:15},
]

// users.forEach((user)=>{
//     console.log(user.name, user.age);
// })


for(const user of users){
    console.log(user.name, user.age);
}