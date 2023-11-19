// nested if else

//  create a game
//1. winning number 19
//2. 19 your guess is right
//3. 17 to low
//4. 20 too high



let winningNumber = 19;
let userGuess = +prompt("Guess a number : ");
// console.log(typeof userGuess); // number

if(userGuess === winningNumber){
    console.log("Your guess is right");
}
else{
   if(userGuess< winningNumber){
       console.log("Too low !!!");
   }
   else{
       console.log("Too high !!!");
   }
}