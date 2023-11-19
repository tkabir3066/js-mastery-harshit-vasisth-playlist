/* 
const rootNode = document.getRootNode();
// console.log(rootNode.childNodes);


const htmlElementNode = rootNode.childNodes[1];
// console.log(htmlElementNode)
// console.log(htmlElementNode.childNodes) // NodeList(3)[head, text, body];


const headElementNode = htmlElementNode.childNodes[0];
const textNode1 = htmlElementNode.childNodes[1];
const bodyElementNode = htmlElementNode.childNodes[2];

// console.log(headElementNode.parentNode);
// console.log(textNode1);
// console.log(bodyElementNode);


// siblings relation

console.log(headElementNode.nextSibling); //#text
console.log(headElementNode.nextElementSibling); //<body></body>
console.log(headElementNode.nextSibling.nextSibling); //<body></body>
 */



//Task
/* 
const heading = document.querySelector("h1");
let parent =heading.parentNode;
parent.style.background= "khaki";

const body = heading.parentNode.parentNode;
body.style.backgroundColor = "#333";
body.style.color = "green"; */

// const body = document.body;
// body.style.backgroundColor = "#333";
// body.style.color = "green"; 


// const head= document.querySelector("head");
// console.log(head);
//  const title =head.querySelector("title");
//  console.log(title);
//  console.log(title.childNodes);


const container = document.querySelector(".container");
 
console.log(container.childNodes);
console.log(container.children); //h1, p