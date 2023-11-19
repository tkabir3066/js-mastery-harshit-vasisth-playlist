
// const myArray = ["value1", "value2"];
// const myVar1 = myArray[0];
// console.log(myVar1);
// const myVar2 = myArray[1];
// console.log(myVar2);


const myArray = ["value1", "value2", "value3"];
const [myVar1, ...newArray] = myArray;
// myVar1 = "hello world";
console.log(myVar1);
console.log(newArray);