// Call, apply, bind
//important for Interview

/* const user1 = {
  firstName: "Tutul",
  age: 15,
  about: function () {
    console.log(this.firstName, this.age);
  },
};
const user2 = {
  firstName: "Rohit",
  age: 10,
};

user1.about.call(); // output = undefined, undefined //because we did not pass this in call

user1.about.call(user1); //Tutul 15
user1.about.call(user2); //Rohit 10
 */

//-----------------------------------------------------------------------------------//

/* const user1 = {
  firstName: "Tutul",
  age: 15,
  about: function (hobby, favMusician) {
    console.log(this.firstName, this.age, hobby, favMusician);
  },
};
const user2 = {
  firstName: "Rohit",
  age: 10,
};

// user1.about.call(); // output = undefined, undefined //because we did not pass this value inside call

user1.about.call(user1, "Football", "Ricki Martin"); //Tutul 15 Football Ricki Martin
user1.about.call(user2, "Cricket", "Arijit"); //Rohit 10 Cricket Arijit
 */

//------------------------------------------------------------------------------------------------------//

function about(hobby, favMusician) {
  console.log(this.firstName, this.age, hobby, favMusician);
}

const user1 = {
  firstName: "Tutul",
  age: 15,
};
const user2 = {
  firstName: "Rohit",
  age: 10,
};

//call
// about.call(); // output = undefined, undefined //because we did not pass this value inside call

// about.call(user1, "Football", "Ricki Martin"); //Tutul 15 Football Ricki Martin
// about.call(user2, "Cricket", "Arijit"); //Rohit 10 Cricket Arijit

//apply

// about.apply(user1, ["Football", "Ricki Martin"]); //Tutul 15 Football Ricki Martin
// about.apply(user2, ["Cricket", "Arijit"]); //Rohit 10 Cricket Arijit

//bind
//bind return a function
const func = about.bind(user2, "Cricket", "Arijit");
console.log(func);
/*  about(hobby, favMusician) {
    console.log(this.firstName, this.age, hobby, favMusician);
  }
 */

func(); // Rohit 10 Cricket Arijit
