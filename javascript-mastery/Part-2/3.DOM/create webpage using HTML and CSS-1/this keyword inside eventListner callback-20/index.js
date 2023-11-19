
const btn= document.querySelector(".btn-headline");
console.log(btn);



//simple function
// ekahne eventListener e simple function use hocche tai this er value  //<button class="btn btn-headline">Learn More</button>
// btn.addEventListener("click", function(){
//     console.log("you clicked me...");
//     console.log("value of this :");
//     console.log(this); //<button class="btn btn-headline">Learn More</button>

// })






//arrow function
// arrow function er khetre window object asbe
btn.addEventListener("click", ()=>{
    console.log("you clicked me...");
    console.log("value of this :");
    console.log(this); //[object Window]

})