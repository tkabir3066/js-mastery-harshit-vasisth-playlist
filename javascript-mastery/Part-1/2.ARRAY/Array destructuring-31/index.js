// array destructuring

// const myArray = ["value1","value2"];

// const myVar1 = myArray[0];
// console.log(myVar1);
// const myVar2 = myArray[1];
// console.log(myVar2);



// const myArray = ["value1","value2"];
// // const [myVar1,myVar2] = myArray;
// let [myVar1,myVar2] = myArray;
// myVar1="my value change"; // if declare with let 
// console.log(myVar1);
// console.log(myVar2);


// const myArray = ["value1","value2", "value3"];
// const [myVar1,myVar2] = myArray;
// console.log(myVar1); // value1
// console.log(myVar2); // value2


// const myArray = ["value1","value2", "value3"];
// const [myVar1,myVar2, myVar3] = myArray;
// console.log(myVar1); // value1
// console.log(myVar2); // value2s
// console.log(myVar3); // value3



// const myArray = ["value1"];
// const [myVar1,myVar2, myVar3] = myArray;
// console.log(myVar1); // value1
// console.log(myVar2); // undefined
// console.log(myVar3); // undefined






const myArray = ["value1","value2", "value3", "value4"];
const [myVar1,myVar2,...newArray] = myArray;
console.log(myVar1); // value1
console.log(myVar2); // value2
console.log(...newArray); // value3, value4