// filter method

// const numbers = [1,3,5,7,8,14];

// const filterNumber = numbers.filter((number)=>{
//     return number>5;
// })

// console.log(filterNumber); //Array(3) [ 7, 8, 14 ]


// const numbers = [1,3,5,7,8,14];

// const filterNumber = numbers.filter((number)=>{
//     return number%2===0;
// })

// console.log(filterNumber); //Array(3) [ 8, 14 ]
 

const numbers = [1,3,5,7,8,14];

const filterNumber = numbers.filter((number)=>{
    return number%2!==0;
})

console.log(filterNumber); //Array(3) [1,3,5,7]