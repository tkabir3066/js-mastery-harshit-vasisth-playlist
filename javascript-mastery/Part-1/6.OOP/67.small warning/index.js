// small warning

const user1 = {
  firstName: "Tutul",
  age: 20,
  about: function () {
    console.log(this.firstName, this.age);
  },
};

// don't do this mistae
// const myFunc = user1.about;
// myFunc() //undefined undefined

//do this
const myFunc = user1.about.bind(user1);
myFunc();
