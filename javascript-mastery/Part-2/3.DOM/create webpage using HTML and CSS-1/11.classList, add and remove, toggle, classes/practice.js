
const todoList = document.querySelector(".todo-list");
// todoList.classList.add("bg-dark");
// todoList.classList.remove("todo-list");

console.log(todoList.classList)
const sectionTodo = document.querySelector(".section-todo");
// sectionTodo.classList.add("bg-dark");

sectionTodo.classList.remove("container");
console.log(sectionTodo.classList)


sectionTodo.classList.toggle("bg-dark");