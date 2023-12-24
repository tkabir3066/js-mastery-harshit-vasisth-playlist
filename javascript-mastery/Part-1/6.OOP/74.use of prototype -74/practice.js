
//   practice-1

// function createUser(name, age,email,address){
//    const user = Object.create(createUser.prototype);
//    user.name = name;
//    user.age = age;
//    user.email = email;
//    user.address = address;

//    return user;
// }

// createUser.prototype.about = function(){
//     return `${this.name} is ${this.age} years old`;
// }

// createUser.prototype.is18 = function(){
//     return this.age >=18;
// }

// createUser.prototype.sing = function(){
//     return "tere bin";
// }
// const user1 = createUser("Tutul Kabir",29 , "tutulkabir@gmail.com", "myAddress");
// const user2 = createUser("Anarul Kabir",25 , "anarulkabir@gmail.com", "myAddress");
// const user3 = createUser("Soyab Aktar",22 , "soyab123@gmail.com", "myAddress");
// const user4 = createUser("Keya Khatun",13 , "keyakhatun@gmail.com", "myAddress");

// console.log(user1.about());
// console.log(user1.is18());
// console.log(user1.sing());

// console.log(user2.is18());
// console.log(user2.sing());
// console.log(user2.about());

// console.log(user3.is18());
// console.log(user3.about());
// console.log(user3.sing());

// console.log(user4.about());
// console.log(user4.is18());
// console.log(user4.sing());



// practice-2
function createUser(name, age, email, address){
     const user = Object.create(createUser.prototype);
     user.name = name;
     user.age = age;
     user.email = email;
     user.address = address;

     return user;
}

createUser.prototype.about = function(){
    return `${this.name} is ${this.age} years old`;
}

createUser.prototype.is18 = function(){
    return this.age > 18;
}

createUser.prototype.song = function(){
    return "Tum bin";
}

const user1 = createUser("Tutul Kabir", 29, "tutulKabir@gmail.com", "Kolkata");
const user2 = createUser("Anarul Kabir", 24, "aKabir@gmail.com", "Munbai");
const user3 = createUser("David Cameroon",15, "cameroondavidr@gmail.com", "Las Vegus");

console.log(user3);

console.log(user1.about());
console.log(user1.is18());
console.log(user1.song());

console.log(user2.about());
console.log(user2.is18());
console.log(user2.song());

console.log(user3.about());
console.log(user3.is18());
console.log(user3.song());