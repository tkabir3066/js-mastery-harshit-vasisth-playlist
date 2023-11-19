// arrow functions
// arrow function ka khudka this nehi hota.. jo leta hai wo sorrounding se lete hai
// arrow function ka this window hoga
const user1 = {
    firstName : "Tutul",
    age:29,
    about: () => {
        console.log(this.firstName, this.age);
    }
}

user1.about(); //