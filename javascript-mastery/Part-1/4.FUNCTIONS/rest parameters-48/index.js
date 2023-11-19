// rest parameters

// function myFunc(a,b, ...c){
//       console.log(`a is ${a}`); // 34
//       console.log(`b is ${b}`); //b is 35
//       console.log(`c is ${c}`); //c is 45,46,48
//     }

//     myFunc(34,35,45,46,48,);




function addAll(...numbers){
          let total = 0;
     for(let number of numbers){
        total = total+ number;
     }

     return total;

}

const ans = addAll(4,5,6,9,12,16);
console.log(ans); // 52