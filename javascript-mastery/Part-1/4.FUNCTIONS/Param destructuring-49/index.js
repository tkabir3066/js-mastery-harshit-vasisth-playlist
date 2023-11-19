// param destructuring
// it uses with Object and react

const person = {
    firstName : "Tutul",
    gender: "male",
    age:29
}


function printDetails({firstName, gender, age}){
      console.log(firstName);
      console.log(gender);
      console.log(age);
}
printDetails(person);