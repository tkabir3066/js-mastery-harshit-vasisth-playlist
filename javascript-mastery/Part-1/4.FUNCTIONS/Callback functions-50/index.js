// callback functions
// akta function ke onne akta function e call korle seta ke callback function bole
//A callback is a function passed as an argument to another function
// This technique allows a function to call another function
// A callback function can run after another function has finished
//Where callbacks really shine are in asynchronous functions, where one function has to wait for another function (like waiting for a file to load).





// function  addNum(a,b){
//    return a+b;
// }

// function printDetails(sum){
//     console.log(sum);// 80
// }

// printDetails(addNum(30,50));





// function square(x){
//     console.log(`Square of ${x}:${x*x}`);
// }
// square(5);
// square(4);
// square(7);


// const y=square;
// y(9); // 81




// callback

function square(x){
    console.log(`Square of ${x}:${x*x}`);
}

function higherOrderFunction(num, callback){
   callback(num);
}

higherOrderFunction(11, square);    // akti function onno ekti function ke receive korche tar argument hisebe... argument hisebe function ke je receive korche seti ke bola hoi callback function and je function ta callback function ke receive korlo sei function ke bola hoi higher order function.




function myFunc2(name){
    console.log("inside my func 2");
    console.log(`your name is ${name}`);
}

function myFunc(callback){
    console.log("hello there I am a func ans i can...");
    callback("tutul");
}

myFunc(myFunc2);