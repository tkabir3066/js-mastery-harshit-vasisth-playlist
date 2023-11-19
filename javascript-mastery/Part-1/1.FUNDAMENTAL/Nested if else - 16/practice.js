
let winning = 19;
let guess = + prompt("Enter a number : ");

if(guess===winning){
    console.log("Your guess is right");
}

else{
    if(guess<winning){
        console.log("too low!!!");
    }else{
        console.log("too high!!!");
    }
}