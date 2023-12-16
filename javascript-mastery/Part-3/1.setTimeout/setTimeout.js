//Synchronous programming vs asynchronous programming

//Synchronous programming

/* console.log("Script start");

for (let i = 0; i < 1000; i++) {
  console.log("Inside for loop");
}

console.log("Script end"); */

// real life example of synchronous programming
// Website backend me data chahiye hota hai, for an example, sare ke sare username or user information fetch karna hota hai backend se ya kisi API se usme thoda samay lagta hai . Jitna de fetch hoga utna der aage ka web page load nahi hoga toh woh code blocking event banjayega hamare liye, yahi hota hai synchronous programming

//javascript is a synchronous programming language matlab javascript me single thread hai hamare pas woh thread hamare code execute karte hai

//Asynchronous programming
/* console.log("Script start");
setTimeout(() => {
  console.log("Inside setTimeout");
}, 1000);

console.log("Script end"); */

// setTimeout id return kore

console.log("Script start");
const id = setTimeout(() => {
  console.log("Inside setTimeout");
}, 1000);

console.log("id of setTimeout is ", id);
console.log("Clearing settimeout ");
clearTimeout(id);
console.log("Script end");
