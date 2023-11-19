// arrow function

const add = (num1, num2)=> num1+num2;
// console.log(add(25,26)); // 51


// const isEven = (num) =>{
//     if(num%2===0){
//         return true;
//     }

//     return false;

// }

// console.log(isEven(8)); // true
// console.log(isEven(15)); // false



const isEven = (num)=> num%2===0;
// console.log(isEven(10)); // true
// console.log(isEven(13)); // false


  
 const firstChar = (anyString)=> anyString[0];
//  console.log(firstChar("Tutul")); // T
//  console.log(firstChar("bangladesh")); // b


const findTarget = (array, target)=> {
    for(let i=0; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
    }

    return -1;
}

const myArray = [2,5,7,9,14];
const ans = findTarget(myArray, 7);
const ans2 = findTarget(myArray, 25);
console.log(ans); // 2(index number of 7)
console.log(ans2); // -1 // array er moddhe 25 nei tai -1 hobe