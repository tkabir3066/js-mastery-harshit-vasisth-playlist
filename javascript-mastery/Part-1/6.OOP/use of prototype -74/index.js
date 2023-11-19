

// const userMethods = {
//     about : function(){
//         return `${this.firstName} is ${this.age} years old`;
//     },
    
//     is18 : function(){
//         return this.age >=18;
//     }
// }

function createUser(firstName, lastName, email, age, address){
    const user = Object.create(createUser.prototype);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    
    return user;
}

createUser.prototype.about =   function(){
    return `${this.firstName} is ${this.age} years old`;
};

createUser.prototype.is18 =  function(){
    return this.age >=18;
};

createUser.prototype.sing = function(){
    return "la la la la";
}
const user1 = createUser('Tutul', 'Kabir','tutul@gmail.com', 29, 'myaddress');
const user2 = createUser('Atif', 'Islam','atif@gmail.com', 25, 'myaddress');
const user3 = createUser('Ayan', 'Ali','ayan@gmail.com', 22, 'myaddress');

console.log(user1);
console.log(user1.is18()); //true
console.log(user1.sing()); //la la la la
console.log(user1.about()); //Tutul is 29 years old