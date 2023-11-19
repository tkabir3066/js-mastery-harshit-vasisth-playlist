// function declaration

// function singHappyBirthDay(){
//     console.log("happy birthday to you......");
// }
// singHappyBirthDay();
// singHappyBirthDay();
// singHappyBirthDay();


// function twoPlusFour(){
//     return 2+4;
// }
// const returnValue = twoPlusFour();
// console.log(returnValue)


// function sum(num1, num2){
//   return num1+num2;
// }

// const addSum = sum(10,15);
// const addSum2 = sum(40,15);
// console.log(addSum);
// console.log(addSum2);



function addNum(num1, num2, num3){
     return num1 + num2 + num3;
}

const sum = addNum(15,12);
// console.log(sum); // NaN // beacause  here i am clling function with two number 15, 12 but there are thee parameter num1, num2, num3 etc.

// console.log(undefined+undefined); // NaN
// console.log(15+12+undefined); // NaN 



        
    // TASK

    //1. function name isEven
    //2. input : 1 number

    // output : true/false


    // function isEven(num){
    //     if(num % 2 === 0){
    //         return true;
    //     }
    //     else{
    //         return false;
    //     }
    // }

    // console.log(isEven(10));
    // console.log(isEven(15));


        //   OR
        
       /*   function isEven(num){
            return num%2===0;
         }
         console.log(isEven(5)); // false
         console.log(isEven(10)); // true
          */




         // TASK-2
         //  function name : firstChar
         // input: string
         // output : firstCharacter
/* 
         function firstchar(anyString){
             return anyString[0];
         }

         console.log(firstchar("Tutul")); // T
         console.log(firstchar("abc")); // a */






         // Task-3

        //  input : array, target (number)
        // output: index of target if target present in array


        function findTarget(array, target){
             for(let i=0; i<array.length; i++){
                 if(array[i] === target){
                     return i;
                 }
             }
             return -1;
        }

        const myArray = [1,3, 8, 90];
        const ans = findTarget(myArray, 8);
        const ans2 = findTarget(myArray, 2);
        console.log(ans);
        console.log(ans2);   // -1 because array er moddhe 2 nei
