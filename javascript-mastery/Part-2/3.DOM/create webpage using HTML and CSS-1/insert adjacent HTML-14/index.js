
// elem.insertAdjacentHTML(where, html)
// beforebegin
//afterbegin
// beforeend
// afterend


const ul= document.querySelector(".todo-list");
// ul.insertAdjacentHTML("beforeend", "<li>Web Tech</li>");
// ul.insertAdjacentHTML("afterbegin", "<li>Web Tech</li>");
// ul.insertAdjacentHTML("beforebegin", "<li>Web Tech</li>");
ul.insertAdjacentHTML("afterend", "<li>Web Tech</li>");

console.log(ul);