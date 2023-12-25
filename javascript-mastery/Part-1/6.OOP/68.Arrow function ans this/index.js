// arrow functions
// arrow function ka khudka this nehi hota.. jo leta hai wo sorrounding se lete hai
// arrow function ka this window hoga
const user1 = {
  firstName: "Tutul",
  age: 29,
  about: () => {
    console.log(this); // window object
    console.log(this.firstName, this.age);
  },
};

user1.about(); // undefined undefined

//call, apply, bind method use korle o arrow function er this change korte parbo na // arrow function er this change kora jai na
