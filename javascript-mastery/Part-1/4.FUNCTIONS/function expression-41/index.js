// function expression

 const sum = function(num1, num2){
     return num1+num2;

 }

//   console.log(sum(10,20)); // 30



const firstChar = function(anyString){
    return anyString[0];
}

// console.log(firstChar("Tutul")); // T
// console.log(firstChar("bangladesh")); // b


const findTarget = function(array, target){
            for(let i=0; i<array.length; i++){
                if(array[i]===target){
                    return i;
                }
            }

            return -1;
}

const myArray = [1, 5, 8, 15, 11];

// console.log(findTarget(myArray, 8)); // 2
// console.log(findTarget(myArray, 5)); // 1
// console.log(findTarget(myArray, 17)); // -1
