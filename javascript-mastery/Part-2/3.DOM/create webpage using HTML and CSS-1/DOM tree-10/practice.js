
const rootNode = document.getRootNode();
console.log(rootNode.childNodes);

const htmlElementNode = rootNode.childNodes[0];
const textNode1 = htmlElementNode.childNodes[0];
const headElementNode = htmlElementNode.childNodes[0];
const bodyElementNode = htmlElementNode.childNodes[0];

// console.log(headElementNode);
// console.log(textNode1);
// console.log(bodyElementNode);


// // sibling relation

// console.log(headElementNode.nextSibling)
// console.log(headElementNode.nextSibling.nextSibling)


const heading = document.querySelector("h1");
// console.log(heading);

const parent = heading.parentNode;
// console.log(parent);
parent.style.backgroundColor = "blue";

const body = parent.parentNode;
// console.log(body)
body.style.backgroundColor = "#333";
body.style.color = "#fff";


const head = document.querySelector("head");
// console.log(head.childNodes);
// console.log(head.children);


const container = document.querySelector(".container");
console.log(container.childNodes);
console.log(container.children);