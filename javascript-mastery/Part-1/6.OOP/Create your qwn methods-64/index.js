// methods
// function inside object is called method


// const person1 = {
//     firstName: "Tutul",
//     age: 8,
//     about:function personInfo(){
//         console.log(`person name is ${this.firstName} and age is ${this.age}`);
//     },
// }



function personInfo(){
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
}

const person1 = {
    firstName: "Tutul",
    age: 8,
    about:personInfo,
}
const person2 = {
    firstName: "Anarul",
    age: 18,
    about:personInfo,
}
const person3 = {
    firstName: "Rohit",
    age: 28,
    about:personInfo,
}
const person4 = {
    firstName: "Anita",
    age: 21,
    about:personInfo,
}

person1.about();
person2.about();
person3.about();
person4.about();