//loop

//get multiple elements using getElementsByClassName
// get multiple elements using querySelectorAll

//getElementsByClassName
let navItems = document.getElementsByClassName("nav-item");  // HTML Collection

// console.log(navItems);
// console.log(navItems.length);//3
// console.log(Array.isArray(navItems)); //false
// console.log(typeof navItems);//object
//array like object---> indexing, length property
// console.log(navItems[0]);
// console.log(navItems[1]);
// console.log(navItems[2]);


//array like object e simlple for loop, for of loop chalate pari
//  for(let i=0; i<navItems.length; i++){
//     console.log(navItems[i]);
//  }


// for(let nav of navItems){
//     console.log(nav);
// }


//We cant use forEach method to iterate through HTML collection
// converting array like object to array

navItems= Array.from(navItems);
navItems.forEach(nav=>{
    console.log(nav);
})


//querySelectorAll

/* let navItems = document.querySelectorAll(".nav-item"); //NodeList(3)[{ "0": {}, "1": {},"2": {} }]

console.log(navItems);
console.log(Array.isArray(navItems)); //false
console.log(typeof navItems); //object

navItems= Array.from(navItems);
console.log(Array.isArray(navItems)); //true

navItems.forEach(nav=>{
        console.log(nav);
    }) */
   

   
    



// Note:- HTML collection vs NodeList
