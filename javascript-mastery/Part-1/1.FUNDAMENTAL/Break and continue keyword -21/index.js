// break keyword
// continue keyword

// break keword condition-1
/* for(let i=1; i<=100; i++){
    if(i===10){
        break;
    }
    console.log(i); // 1 upto 9
}
console.log("hello there"); */


// break keword condition-2s

/* for(let i=1; i<=100; i++){
    console.log(i); // 1 upto 10
    if(i===10){
        break;
    }
}
console.log("hello there"); */



// continue keyword
/* 
for(let i=1; i<=100; i++){
    if(i===10){
        continue;
    }
    console.log(i); //  from 1 to 100 all number will print except 10
}
console.log("hello there"); */



for(let i=1; i<=100; i++){
    console.log(i); // all number will be printed
    if(i===10){
       continue;
    }
}
console.log("hello there");