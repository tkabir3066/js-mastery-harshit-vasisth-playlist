
// function myFunc(a,b,...c){
//     console.log(a);
//     console.log(b);
//     console.log(c);


// }

// myFunc(254,35,89,47,65,98);


function addAll(...numbers){
     let total=0;
    for(let number of numbers){
          total=total+number;
    }
    return total;
}

const add = addAll(25,89,45,14,25);
console.log(add);