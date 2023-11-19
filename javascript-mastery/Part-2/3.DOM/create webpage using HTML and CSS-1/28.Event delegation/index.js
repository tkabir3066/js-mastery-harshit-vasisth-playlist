// event bubbling(event propagation)
//  event capturing

// first e event capture hobe tarpor event bubble ... cycle wise procees cholbe

const grandParent = document.querySelector(".grand-parent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
const body = document.body;



grandParent.addEventListener("click", function(e){
     // console.log("you clicked on grandparent")
     console.log(e.target.textContent);
     console.log(e.target);
})