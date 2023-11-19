
const person = {
    name: "Tutul Kabir",
    age:29,
    hobbies: ["music", "football", "skattuing"]
}

let obj = Object.keys(person);
console.log(Array.isArray(Object.keys(person)));

for(let key of obj){
    console.log(person[key]);
}