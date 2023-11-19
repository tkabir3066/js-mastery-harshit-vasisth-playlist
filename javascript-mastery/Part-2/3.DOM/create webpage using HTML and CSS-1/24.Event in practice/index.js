//litle practice with click events

  
const allButtons = document.querySelectorAll(".my-buttons button");

console.log(allButtons)

allButtons.forEach(button=>{
    button.addEventListener("click", function(e){
        // console.log(e.target)
        e.target.style.backgroundColor = "khaki";
        e.target.style.color = "#333";
    })
})

 