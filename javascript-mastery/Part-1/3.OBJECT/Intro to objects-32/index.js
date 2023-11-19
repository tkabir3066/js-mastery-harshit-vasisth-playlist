// objects are reference type
//arrays are good but not sufficient for real world data
// objects store key value pairs
// objects don't have index



// how to create objects
 const person = {name:"Tutul", age:29};
//  console.log(person);
//  console.log(typeof person); // object


const person2 = {
    name: "Anarul",
    age: 25,
    hobbies: ["sleeping", "walking", "web devloping", "playing football"]
}


//how to access data from objects

// let name = person.name;
// let age = person.age;
// console.log(name); // Tutul
console.log(person["name"]); // Tutul // javascript e property by default string e hoi
console.log(["age"]); //29

console.log(person2.hobbies[2]); // web devloping





// how to add key value pair to objects
person2.gender = "male"; // with dot(.) notation
// person2["gender"] = "male"; // with bracket notation
console.log(person2); 