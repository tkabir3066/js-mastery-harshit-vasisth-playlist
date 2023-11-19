// event bubbling(event propagation)
//  event capturing

// first e event capture hobe tarpor event bubble ... cycle wise procees cholbe

const grandParent = document.querySelector(".grand-parent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
const body = document.body;


// event bubble
child.addEventListener("click", function(){
     console.log("you clicked on child")
})
parent.addEventListener("click", function(){
     console.log("you clicked on parent")
})
grandParent.addEventListener("click", function(){
     console.log("you clicked on grandparent")
})
body.addEventListener("click", function(){
     console.log("you clicked on body")
})


// event capture
child.addEventListener("click", function(){
     console.log("capturing on child")
}, true)
parent.addEventListener("click", function(){
     console.log("capturing on parent")
}, true)
grandParent.addEventListener("click", function(){
     console.log("capturing on grandparent")
}, true)
body.addEventListener("click", function(){
     console.log("capturing on body")
}, true)