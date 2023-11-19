// sort method
//ASCI TABLE
// char: ascii value

// sort method can change original array (interview question)
 
/* 
const numbers = [5,9,25, 17,12];

const sortedNumber1 = numbers.sort((a,b)=>a-b);
console.log(sortedNumber1); //Array(5) [ 5, 9, 12, 17, 25 ]
// a-b --->ascending order numbers
// if a-b => positive(greater than zero) then b comes first of a.
// if a-b---> negative then a comes first then b.

const sortedNumber2 = numbers.sort((a,b)=>b-a);
console.log(sortedNumber2); //[ 25, 17, 12, 9, 5 ]
// b-a --->decending order  numbers */





// realistic use of sort method

// ecommece Website
// price lowToHigh HighToLow

const products = [
    {productId:1, productName: "p1", price:300},
    {productId:2, productName: "p2", price:3000},
    {productId:3, productName: "p3", price:200},
    {productId:4, productName: "p4", price:8000},
    {productId:5, productName: "p5", price:500},
]


// low to high
// const lowToHigh = products.slice(0).sort((a,b)=>{
//      return a.price-b.price;
// })
// console.log(lowToHigh);

const highToLow = products.slice(0).sort((a,b)=>{
    return b.price-a.price;
})
console.log(highToLow);