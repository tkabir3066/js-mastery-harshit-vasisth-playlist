// reduce method

const numbers = [1,2,3,4,5,10];

// aim: sum of all the numbers in array

const sum = numbers.reduce((accumulator, currentValue)=>{
    return accumulator+currentValue;
}, 0); // 0 is initial value

console.log(sum); // 23

// diagram of the following

// accumulator , currentValue , return
// 1                2             3
// 3                3             6
// 6                4             10
// 10               5             15
// 15               10            25




const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial);
// expected output: 10



const userCart = [
    {productId:1, productName:"laptop", price:32000},
    {productId:2, productName:"mobile", price:12000},
    {productId:3, productName:"smart watch", price:7000},
]

const userDetails =   userCart.reduce((totalPrice, currentProduct)=>{
    return totalPrice+currentProduct.price;
},0);

console.log(userDetails); 

// totalPrice   // currentValue    // return
// 0                  {}             32000
// 32000              12000          44000
// 44000              7000           51000