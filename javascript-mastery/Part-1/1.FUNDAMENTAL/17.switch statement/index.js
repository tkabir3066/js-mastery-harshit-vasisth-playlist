// switch statement
//
// The switch expression is evaluated once.
// The value of the expression is compared with the values of each case.
// If there is a match, the associated block of code is executed.
// If there is no match, the default code block is executed.


// with if , else if, else
/* let day = 0;

if(day === 0){
    console.log("Sunday");
}
else if(day === 1){
    console.log("Monday");
}
else if(day === 2){
    console.log("Tuesday");
}
else if(day === 3){
    console.log("Wednesday");
}
else if(day === 4){
    console.log("Thursday");
}
else if(day === 5){
    console.log("Friday");
}
else if(day === 6){
    console.log("Saturday");
}
else{
    console.log("Invalid day");
} */


// with switch statement

let day = 7;

switch(day){
    case 0:
    console.log("Sunday");
    break;

    case 1:
    console.log("Monday");
    break;

    case 2:
    console.log("Tuesday");
    break;
    
    case 3:
    console.log("Wednesday");
    break;

    case 4:
    console.log("Thursday");
    break;

    case 5:
    console.log("Friday");
    break;

    case 6:
    console.log("Saturday");
    break;

    default:
    console.log("Invalid day");
}




var digit = prompt("Enter any digit : ");
switch (digit) {
  case "0": 
    console.log("Zero");
    break;
  case "1":
    console.log("One");
    break;
  case "2":
    console.log("Two");
    break;
  case "3":
    console.log("Three");
    break;
  case "4":
    console.log("Four");
    break;
  case "5":
    console.log("Five");
    break;
  case "6":
    console.log("Six");
    break;
  case "7":
    console.log("Seven");
    break;
  case "8":
    console.log("Eight");
    break;
  case "9":
    console.log("Nine");
    break;
  case "10":
    console.log("Ten");
    break;
  default:
    console.log("Not a digit");
}



let digit2 = +prompt("Enter a digit: ");
switch(digit2){
    case 0 :
    console.log("Zero")
    break;

    case 1 :
    console.log("One")
    break;

    case 2 :
    console.log("Two")
    break;

    case 3 :
    console.log("Three")
    break;

    case 4 :
    console.log("Four")
    break;

    case 5 :
    console.log("Five")
    break;

    case 6 :
    console.log("Six")
    break;

    case 7 :
    console.log("Seven")
    break;

    case 8 :
    console.log("Eight")
    break;

    case 9 :
    console.log("Nine")
    break;

    case 10 :
    console.log("Ten")
    break;

    default :
    console.log("Invalid");
    
}

console.log(typeof digit2);





// input a letter and check it is vowel or consonant using switch

var letter = prompt("Enter a letter :");
letter = letter.toLowerCase();
// switch(letter){
//     case "a" :
//     console.log("vowel");
//     break;
//     case "e" :
//     console.log("vowel");
//     break;
//     case "i" :
//     console.log("vowel");
//     break;
//     case "o" :
//     console.log("vowel");
//     break;
//     case "u" :
//     console.log("vowel");
//     break;
//     default:
//         console.log("Consonant")
// }

switch(letter){
    case "a" :
    case "e" :
    case "i" :
    case "o" :
    case "u" :
        console.log("vowel");
        break;
    default:
        console.log("Consonant")
}