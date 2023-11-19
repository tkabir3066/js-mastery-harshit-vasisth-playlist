
/* let navItems = document.getElementsByClassName("nav-item");
console.log( navItems) // html collection

// console.log(navItems[0])
// console.log(navItems[1])
// console.log(navItems[2])

console.log(Array.isArray(navItems)) //false

navItems =Array.from(navItems);
console.log(typeof navItems)
console.log(Array.isArray(navItems)) //false */

let navItems = document.querySelectorAll(".nav-item");
console.log(navItems); // NodeList

navItems= Array.from(navItems);
console.log(Array.isArray(navItems)); //true

navItems.forEach(navItem=>console.log(navItem));