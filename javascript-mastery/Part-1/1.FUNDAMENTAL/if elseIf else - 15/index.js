// if
//  else if
//  else if
//  else if
// else


/* let tempInDegree = +prompt("Enter temparature : ");
// console.log(typeof tempInDegree); // number
if(tempInDegree < 0){
    console.log("extremely cold outside");
}
else if(tempInDegree < 16){
    console.log("It is cold outside");
}
else if(tempInDegree < 25){
    console.log("weather is okay");
}
else if(tempInDegree < 35){
    console.log("lets go for swim");
}
else if(tempInDegree < 45){
    console.log("turn on ac");
}
else{
    console.log("too hot");
} */



let tempInDeg = + prompt("Enter temparature :")

if(tempInDeg > 40){
    console.log("too hot");
}
else if(tempInDeg > 30){
    console.log("lets go for swim");
}
else if(tempInDeg > 20){
    console.log("weather is cooool");
}
else if(tempInDeg > 10){
    console.log("It is cold outside");
}
else{
    console.log("extremely cold");
}