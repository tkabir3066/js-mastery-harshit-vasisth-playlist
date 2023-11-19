// and(&&) or(||) operator

let firstName = 'Tutul';
let age = 29;

// if(firstName[0] === "T"){
//     console.log('your name start with T');
// }


// if(age>18){
//     console.log("You are above 18");
// }


/* if(firstName[0] === "T" && age>18){
    console.log("Name starts with T and age is above 18")
}
else{
    console.log("inide else");
} */

if(firstName[0] === "T" || age>18){
    console.log("inside if")
}
else{
    console.log("inide else");
}