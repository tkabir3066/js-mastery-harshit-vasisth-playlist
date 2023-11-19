// map method
// map function alltime new array toiri korbe



// const numbers = [2,4,5,6,8,12];

// const square = (number)=> number*number;

// const squareNumber = numbers.map(square);
// console.log(squareNumber);



// const numbers = [2,4,5,6,8,12];

// const square = numbers.map(number=>{
//    return number*number;
// })

// console.log(square); 



// const numbers = [2,4,5,6,8,12];

// const square = numbers.map((number, index)=>{
//   console.log(`${number*number} ${index}`); 
// //   4 0 
// //   16 1 
// //   25 2 
// //   36 3 
// //   64 4 
// //   144 5
// })



// const numbers = [2,4,5,6,8,12];

// const square = numbers.map((number, index)=>{
//    return `${number*number} Index: ${index}`;
// })

// console.log(square); 



// realistic example of map method


  const users = [

    {name: "Tutul Kabir", age:29},
    {name: "Soyab Aktar", age:22},
    {name: "Mridul Islam", age:18}
  ]

  const usersName = users.map((user)=>{
      return `${user.name} ${user.age}`
    
    
  })

  console.log(usersName); // Array(3) [ "Tutul Kabir 29", "Soyab Aktar 22", "Mridul Islam 18" ]

  