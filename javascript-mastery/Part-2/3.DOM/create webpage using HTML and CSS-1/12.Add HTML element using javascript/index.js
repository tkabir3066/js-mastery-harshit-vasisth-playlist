// Add new HTML elements to page
// innerHTML to add html element

const todoList = document.querySelector(".todo-list");
console.log(todoList.innerHTML)

// todoList.innerHTML = "<li>New todo</li>";
todoList.innerHTML += "<li>New todo</li>";
//when you should use it , when you should not
