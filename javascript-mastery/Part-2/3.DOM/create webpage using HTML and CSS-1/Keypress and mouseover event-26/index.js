//keypress and mouseover

const body = document.body;
const button = document.querySelector(".btn-headline");


// body.addEventListener("keypress", (e)=>{
//     // console.log(e)
//     console.log(e.key)
// })


button.addEventListener("mouseover", ()=>{

     console.log("mouseover event occur!!!");
})

button.addEventListener("mouseleave", ()=>{

     console.log("mouseover event occur!!!");
})