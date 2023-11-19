// static list vs live list

// querySelectorAll  hamein static list degi
// getElementsBySomething(i.e- getElementsByTagNames etc) hame live list degi



 // querySelectorAll
/* const liItems = document.querySelectorAll(".todo-list li");
const sixthLi = document.createElement("li");
sixthLi.textContent= "item-6";

const ul = document.querySelector('.todo-list');
// ul.append(sixthLi)
// liItems.forEach(li=>{
//     console.log(li)
// })
console.log(liItems);

 */



// getElementsBySomething
const ul = document.querySelector('.todo-list');
const liItems = ul.getElementsByTagName("li");
const sixthLi = document.createElement("li");
sixthLi.textContent= "item-6";
ul.append(sixthLi)
console.log(liItems)
