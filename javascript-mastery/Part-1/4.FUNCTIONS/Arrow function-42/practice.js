
const findTarget = (array, target) => {
    for(let i=0; i<=array[i]-1; i++){
        if(array[i]===target){
           return i;
        }
    }
    return -1;
}

const myArray = [12,25,45,68];

const ans = findTarget(myArray, 68);
console.log(ans);