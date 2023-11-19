
const button = document.querySelector("main button");
const body = document.body;
const currentColor = document.querySelector(".current-color");

function changeRandomColor(){
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);
    const randomColor = `rgb(${red}, ${green}, ${blue})`;

    return randomColor;


     
}


button.addEventListener("click", function(){
    const randomColor = changeRandomColor();

    body.style.backgroundColor = randomColor;
    currentColor.textContent=randomColor;


});