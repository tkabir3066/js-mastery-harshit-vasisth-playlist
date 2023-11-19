//difference between dot and bracket notation
 
const person1 = {
    name: "Tutul",
    age:29,
    hobbies: ["sleeping", "teaching", "web developing"]

};



 
const person2 = {
    name: "Tutul",
    age:29,
   "person hobbies": ["sleeping", "teaching", "web developing"] //javascript e duto word er moddhe space rakha jabe na tai string er moddhe duto word likhte hobe

}

console.log(person2["person hobbies"]); //Array(3) [ "sleeping", "teaching", "web developing" ]
console.log(person2["person hobbies"][0]); // sleeping

let key = "email";
person2[key] = "tutulkabir@gamil.com";
console.log(person2); //{ name: "Tutul", age: 29, "person hobbies": (3) […], email: "tutulkabir@gamil.com" }