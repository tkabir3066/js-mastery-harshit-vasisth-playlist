//clone nodes

/* const ul= document.querySelector('.todo-list');
// console.log(ul);

const li= document.createElement("li");
li.textContent = "new todo";
const li2 = li.cloneNode(true);
ul.append(li);
ul.prepend(li2); */




//practice
const ul= document.querySelector(".todo-list");

const li = document.createElement("li");
li.textContent = "var todo";

const li2= li.cloneNode(true);
const li3= li.cloneNode(true);
const li4= li.cloneNode(true);

ul.append(li);
ul.prepend(li2);
ul.prepend(li3);
ul.prepend(li4);