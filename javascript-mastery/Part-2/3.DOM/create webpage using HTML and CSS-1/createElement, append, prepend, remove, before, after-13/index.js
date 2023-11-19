//document.createElement()
// append
// prepend
// remove

const ul= document.querySelector(".todo-list");

const newTodoItem = document.createElement("li");
newTodoItem.textContent = "Web tech";

// const newTodoItemText = document.createTextNode("Web Tech");
// newTodoItem.append(newTodoItemText);



// ul.append(newTodoItem);
ul.prepend(newTodoItem);
ul.before(newTodoItem);
ul.after(newTodoItem);


