//click event on multiple button



// first method
/* const myButton1 = document.querySelector("#one");
const myButton2 = document.querySelector("#two");
const myButton3 = document.querySelector("#three");
// console.log(myButton1);
// console.log(myButton2);
// console.log(myButton3);


myButton1.addEventListener("click", function(){
    // console.log("you clicked");
    console.log(this.textContent);
})
myButton2.addEventListener("click", function(){
    // console.log("you clicked");
    console.log(this.textContent);

})
myButton3.addEventListener("click", function(){
    // console.log("you clicked");
    console.log(this.textContent);

}) */



// 2nd method


const allButtons = document.querySelectorAll(".my-buttons button");

// allButtons.forEach(button=>{
//     // console.log(button);
   
//     button.addEventListener("click", function(){
//         console.log(this.textContent);
//     })
// })



// event listner e this keyword use korle arrow funtion use kora jabe na
allButtons.forEach(button=>{
    // console.log(button);
   
    button.addEventListener("click", ()=>{
        console.log(this.textContent); // undefined
    })
})