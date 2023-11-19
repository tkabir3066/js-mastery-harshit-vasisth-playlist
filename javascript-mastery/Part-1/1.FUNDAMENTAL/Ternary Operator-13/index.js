// ternary operator
 
// with if else
/* let age = parseFloat(prompt("Enter tour age :"));
let drink;
if(age>=10){
    drink = 'coffee';
}
else{
    drink = 'milk';
}
console.log(drink); */


// with ternary operator/conditional operator

// let age = parseFloat(prompt("Enter tour age :"));
// let drink = age >= 10 ? "coffee" : "milk";
// console.log(drink);


//The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as an alternative to an if...else statement. 




// var number = Number(prompt("Enter a number "));
// var result = number >= 0 ? "positive" : "Negative"
// console.log(result);
     
            // or 
//  number > 0 ?  console.log("positive") : console.log("Negative");




 
var number = Number(prompt("Enter a number "));
var result = number>0 ? "positive" : number <0 ? "negative" : "zero" ;
console.log(result);
