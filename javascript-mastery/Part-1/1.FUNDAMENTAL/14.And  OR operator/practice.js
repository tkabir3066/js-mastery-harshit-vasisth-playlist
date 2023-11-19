
let winningNumber = 19;
let guessNumber = +prompt("Enter a Guessing number: ");

if(guessNumber===winningNumber){
    console.log("your guess is right");
}
else{
    if(guessNumber<winningNumber){
        console.log("your guessNumber is too low!!!");
    }else{
        console.log("your guessNumber is too high!!!");
    }
};