// undefined
// let firstname;
// console.log(firstname); // undefined
// console.log(typeof firstname); // undefined

// firstname = "Tutul";
// console.log(typeof firstname, firstname); // string , Tutul

// if we declare a variable name but not assign its value then output and its data type will be undefined. // this case will be only with var and let// but not with const


// const age;      //Uncaught SyntaxError: missing = in const declaration
// console.log(age);
// if we want to declare with const then must be assign the value



// null

let myVar = null;
console.log(myVar);// null
myVar = "Atif";
console.log(myVar, typeof myVar); // Atif string


////------------- Important for Interview--------------------------////
console.log(typeof null);// output is object// but it is an error,bug in javascript// its output would be null
// javascript is not fixed this bug.. if js wish to fix this bug then all js framwork, library's will be fixed to change.

/* 

//BigInt -> new in js

let myNumber = 123;
// console.log(myNumber);

// BigInt first method
let num1 = BigInt(123);
console.log(num1); // 123n

// BigInt second method
  
  let num2 = 123n;
  console.log(num2);

  let total = num1 + num2;
  console.log(total); // 246n


  // add BigInt and  other data type
  let x= 25n;
  let y= 15;
//   let add = x+y; //Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions

// if we think that  grater than this variable we can acquire interger then we use BigInt.

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991// MAX_SAFE_INTEGER can tell how many (big)integer scores we can do. // koto boro integer score amra korte pari setai bojhacce


console.log(Number.MIN_SAFE_INTEGER)//-9007199254740991

 */
