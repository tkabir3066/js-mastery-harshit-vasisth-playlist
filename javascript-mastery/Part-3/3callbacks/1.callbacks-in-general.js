//understand callbacks

//====== pattern-1 =========//

// function myFunc1(callback) {
//   console.log("Func1 is doing task 1");
//   callback();
// }

// function myFunc2() {
//   console.log("Func1 is doing task 2");
// }
// myFunc1(myFunc2);

//========= pattern-2 =============//
function myFunc1(callback) {
  console.log("Func1 is doing task 1");
  callback();
}

myFunc1(() => {
  console.log("Func1 is doing task 2");
});

//---------------------------------------------------------------------------//

/* function getTwoNumbersAndAdd(number1, number2, callback) {
  //   console.log(number1, number2); //4,5

  if (typeof number1 === "number" && typeof number2 === "number") {
    callback(number1, number2);
  } else {
    console.log("Wrong Data type");
  }
}

function addTwoNumbers(num1, num2) {
  console.log(num1 + num2); //9
}
getTwoNumbersAndAdd(4, 5, addTwoNumbers); */

function getTwoNumbersAndAdd(number1, number2, callback) {
  //   console.log(number1, number2); //4,5

  if (typeof number1 === "number" && typeof number2 === "number") {
    callback(number1, number2);
  } else {
    console.log("Wrong Data type");
  }
}

// function addTwoNumbers(num1, num2) {
//   console.log(num1 + num2); //9
// }
// getTwoNumbersAndAdd(4, 5, addTwoNumbers);
getTwoNumbersAndAdd(4, 5, (num1, num2) => {
  console.log(num1 + num2); //9
});

//---------------------------------------------------------------------------//
/* function getTwoNumbersAndAdd(number1, number2, onSuccess, onFailure) {
  //   console.log(number1, number2); //4,5

  if (typeof number1 === "number" && typeof number2 === "number") {
    onSuccess(number1, number2);
  } else {
    onFailure();
  }
}
getTwoNumbersAndAdd(
  "  4",
  5,
  (num1, num2) => {
    console.log(num1 + num2); //9
  },
  () => {
    console.log("Wrong Data type");
    console.log("Please pass a valid number");
  }
);
 */
