

function findTarget(array, target){
  for(let i=0; i<array.length; i++){
     if(array[i]===target){
       return i;
     }
  }
  return -1;
}


const myArray = [25, 45,32, 152];
console.log(findTarget(myArray, 152));