
 /* 
 const obj1 = {
     key1: "value1",
     key2: "value2"
 }


 const obj2 = {
     key3: "value3"
 }

 console.log(obj1.key1); //value1
 console.log(obj1.key2); //value2
 console.log(obj2.key3); //value3
 console.log(obj2.key1); //undefined
 */


 const obj1 = {
    key1: "value1",
    key2: "value2"
}

// const obj2 = {};
// obj2.key3 = "value3";

// there is one more way to create empty object

const  obj2 = Object.create(obj1);
// console.log(obj2); // Object {}

obj2.key3 = "value3";
obj2.key2 = "unique";

// console.log(obj2.key3); // value3
// console.log(obj2.key1); // value1
// console.log(obj2.key2); // unique


// __proto__
// official echmascript documentation
// [[prototype]] 
// __proto__  and [[prototype]] both are same

console.log(obj2.__proto__); // Object { key1: "value1", key2: "value2" }

// prototype --> eta oporer duto theke alada, eta function er bhitore hoi











const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old`;
    },
    
    is18 : function(){
        return this.age >=18;
    }
}

function createUser(firstName, lastName, email, age, address){
    const user = Object.create(userMethods);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    
    return user;
}



const user1 = createUser('Tutul', 'Kabir','tutul@gmail.com', 29, 'myaddress');
const user2 = createUser('Atif', 'Islam','atif@gmail.com', 25, 'myaddress');
const user3 = createUser('Ayan', 'Ali','ayan@gmail.com', 22, 'myaddress');

console.log(user1);
/* 
[[Prototype]]: Object
about: ƒ ()
is18: ƒ ()
[[Prototype]]: Object
*/

// console.log(user1.about());
// console.log(user2.about());
// console.log(user3.about());