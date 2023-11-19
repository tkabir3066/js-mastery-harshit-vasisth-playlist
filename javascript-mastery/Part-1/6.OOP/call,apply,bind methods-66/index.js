//call, apply, bind methods

/* 
The JavaScript call() Method:
The call() method is a predefined JavaScript method.
It can be used to invoke (call) a method with an owner object as an argument (parameter).
With call(), an object can use a method belonging to another object.
This example calls the fullName method of person, using it on person1:
*/

// const person1 = {
//     name: "Tutul Kabir",
//     age: 29,
//     about: function(){
//     console.log(`${this.name} ${this.age}`);
//     }
// }

// const person2 = {
//     name: "Rohhit",
//     age: 25
// }

// person1.about.call(person2); //Rohhit 25
// person1.about.call(person1); // Tutul Kabir 29



// const person1 = {
//     name: "Tutul Kabir",
//     age: 29,
//     about: function(hobby, favSport){
//     console.log(`${this.name} ${this.age}`, hobby, favSport);
//     }
// }

// const person2 = {
//     name: "Rohhit",
//     age: 25
// }

// person1.about.call(person2, "Web devloping", "football"); // Rohhit 25 Web devloping football
// // person1.about.call(person1); // Tutul Kabir 29



 function about(hobby, favSport){
    console.log(`${this.name} ${this.age}`, hobby, favSport);
 }

const person1 = {
    name: "Tutul Kabir",
    age: 29,
    
}


const person2 = {
    name: "Rohhit",
    age: 25
}

// call
about.call(person2, "Web devloping", "football"); // Rohhit 25 Web devloping football
// person1.about.call(person1); // Tutul Kabir 29

// apply

// about.apply(person2, "Web devloping", "football");//Uncaught TypeError: second argument to Function.prototype.apply must be an array




/* 
The Difference Between call() and apply()

The difference is:

The call() method takes arguments separately.

The apply() method takes arguments as an array.
*/

// The apply() method is very handy if you want to use an array instead of an argument list.


// The apply() Method with Arguments

// The apply() method accepts arguments in an array:
about.apply(person2, ["Web devloping", "football"]); //Rohhit 25 Web devloping football


/* 
Function Borrowing

With the bind() method, an object can borrow a method from another object.
*/
const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
  
  let fullName = person.fullName.bind(member);
  console.log(fullName());





  
// bind method return a function



function about(hobby, favSport){
  console.log(`${this.name} ${this.age}`, hobby, favSport);
}

const person3 = {
  name: "Tutul Kabir",
  age: 29,
  
}


const person4 = {
  name: "Rohhit",
  age: 25
}
const func = about.bind(person4,"Web devloping", "football");
func();


