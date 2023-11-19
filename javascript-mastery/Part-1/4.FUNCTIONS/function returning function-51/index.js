// function returning function


// function myFunc(){
//     return "a";
// }

// const ans= myFunc();
// console.log(ans); // a

 

// function myFunc2(){
//     return [1,2,3,4,5];
// }

// const ans2= myFunc2();
// console.log(ans2); // Array(5) [ 1, 2, 3, 4, 5 ]





// function myFunc3(){
//     return {name:"Tutul", age:29, gender: "male"};
// }

// const ans3= myFunc3();
// console.log(ans3); // Object { name: "Tutul", age: 29, gender: "male" }



// function reutn function

function myfunc1(){
    function hello(){
        console.log("hello world");

    }
    return hello;  // hello() eibhave retun kora jabe na.. first bracket charai hello likte hobe
}

const answer = myfunc1();
answer(); // function returning function




function myFunc2(){
    function hello(){
        return "hello world 1";

    }
    return hello;  // hello() eibhave retun kora jabe na.. first bracket charai hello likte hobe
}

const answer1 = myFunc2();
console.log(answer1());
