// intro to events
// click
// onClick


// 2nd method
// const btn= document.querySelector(" .btn-headline");
// console.dir(btn);

// btn.onclick= function(){
//     console.log("you clicked me.....");
// }


//3rd method

const btn= document.querySelector(" .btn-headline");


// function clickMe(){
//     console.log("you clicked me...");
// }
// btn.addEventListener("click", clickMe);


// btn.addEventListener("click", function(e){
//     console.log("you clicked meeee.....");
//     console.log(e.type)
//     console.log(e.target.textContent)
// })


//arrow function
btn.addEventListener("click", ()=>{
    console.log("hi you clicked me");
})