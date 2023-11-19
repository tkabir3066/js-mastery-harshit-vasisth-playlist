

// const sum = function(num1, num2){
//     return num1 + num2;
// }

// console.log(sum(23, 45));


// const firstChar = function(anyString){
//     return anyString[0];
// }

// console.log(firstChar("Tutul"))



const firstTarget = function(array, target){
    for(let i=0; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}
const myArray = [2,78,25,35];
console.log(firstTarget(myArray,25));