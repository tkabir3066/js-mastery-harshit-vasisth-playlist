//how to get the dimension of element

//height width

const sectionTodo = document.querySelector(".section-todo");

const info = sectionTodo.getBoundingClientRect().height;
const info2 = sectionTodo.getBoundingClientRect().width;
const info3 = sectionTodo.getBoundingClientRect().top;
console.log(info);
console.log(info2);
console.log(info3);
