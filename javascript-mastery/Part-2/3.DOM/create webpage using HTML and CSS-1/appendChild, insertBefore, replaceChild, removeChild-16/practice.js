
// appendChild
//insertBefore
//removeChild

const todoList = document.querySelector(".todo-list");
// console.log(todoList);
const li= document.createElement("li");
li.textContent = "super hero";
const referenceNode = document.querySelector(".first-todo");
todoList.prepend(li);
// todoList.insertBefore(li, referenceNode)
// todoList.replaceChild(li, referenceNode)
todoList.removeChild(referenceNode)