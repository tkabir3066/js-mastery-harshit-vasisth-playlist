// every method

// callback function will return true or false
// every method --> returns true or false(boolean value);
//Return value true if the callbackFn function returns a truthy value for every array element. Otherwise, false. 


const numbers = [2,4,8,16,32];

const evenNumbers = numbers.every((number)=> number%2===0);
// console.log(evenNumbers); // true // array er moddhe protyek ta sankhya ke even hote bhobe tahole every method true return korbe.





const array1 = [1, 30, 39, 29, 10, 13];
const isBelowThreshold = (currentValue) => currentValue < 40;

// console.log(array1.every(isBelowThreshold));
// expected output: true




// realistic example of every method


/* const userCart = [
    {productId:1, productName:"mobile", price:12000},
    {productId:1, productName:"laptop", price:22000},
    {productId:1, productName:"tv", price:15000},
]

// check every product <30000

const checkPrice = userCart.every((cartItem) => cartItem.price<30000);
console.log(checkPrice); // true */





const userCart2 = [
    {productId:1, productName:"mobile", price:12000},
    {productId:1, productName:"laptop", price:32000},
    {productId:1, productName:"tv", price:15000},
]

// check every product <30000

const checkPrice2 = userCart2.every((cartItem) => cartItem.price<30000);
console.log(checkPrice2); // false