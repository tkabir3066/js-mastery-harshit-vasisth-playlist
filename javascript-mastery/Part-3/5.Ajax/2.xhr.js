//XHR

const url = "https://jsonplaceholder.typicode.com/posts";
// const url = "https://jsonplaceholder.typicode.com/post";
const xhr = new XMLHttpRequest();
// console.log(xhr);
// console.log(typeof xhr); //object

//==== step1 ======//

//before open readyState is 0
// console.log(xhr.readyState); //0

xhr.open("GET", url); //ei kaj background e browser korbe means asynchronously kaj korbe

//after open readyState is 1
// console.log(xhr.readyState); //1

/* xhr.onreadystatechange = function () {
  //   console.log(xhr.readyState);

  if (xhr.readyState === 4) {
    // console.log(xhr.response);
    const response = xhr.response;
    // console.log(typeof response); //string // means json e ache
    const data = JSON.parse(response);
    console.log(typeof data); //object
  }
}; */

//onload function tokhon e cholbe jokhon readystate 4 hobe
xhr.onload = function () {
  //   console.log(xhr.readyState);
  const response = xhr.response;
  //   console.log(typeof response); //string // means json e ache
  const data = JSON.parse(response);
};
xhr.send();
