// select element using query selector

/* 
const mainHeading = document.querySelector("#main-heading");
// console.log(mainHeading);

const header = document.querySelector(".header");
// console.log(header);

// const navItem = document.querySelector(".nav-item");
const navItem = document.querySelectorAll(".nav-item");
navItem.forEach(nav=>{
    console.log(nav);
})
// console.log(navItem);

// change the text of main-heading
 */


const mainHeading = document.querySelector("#main-heading");
// console.log(mainHeading);
// console.log(mainHeading.textContent);
// console.log(mainHeading.innerText);
// console.log(mainHeading.innerHTML);


const header = document.querySelector(".header");
// console.log(header);


const navItem = document.querySelector(".nav-item");
// console.log(navItem)

const navItems = document.querySelectorAll(".nav-item");
console.log(navItems)
console.log(Array.isArray(navItems));//false

navItems.forEach(navItem=>console.log(navItem));

