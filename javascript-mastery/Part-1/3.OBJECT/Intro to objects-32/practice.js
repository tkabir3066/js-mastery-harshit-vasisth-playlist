
const person = {
    fullName: "Tutul Kabir",
    age:29,
    job: "Web Developer",
    hobby: ["music", "football", "coding", "learning"]
};

console.log(person.fullName);
console.log(person.age);

console.log(person["fullName"])
console.log(person["age"])
console.log(person["job"])

console.log(person["hobby"][2])
console.log(person.hobby[2]);


// person.gender = "male";
person['gender'] = "male";
console.log( person);
