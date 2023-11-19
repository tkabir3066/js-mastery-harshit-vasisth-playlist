/* // new keyword

function createUser(name, age){
    this.name = name;
    this.age = age;

}

createUser.prototype.about = function(){
    console.log(this.name, this.age);
}
const user1 = new createUser("tutul", 29);

// new keyword 3ta kaj kore ---->
// 1. empty object create kore (this = {}); // this keword empty object refer kore
// 2. empty object ke return korbe //  return this; ---> new keyword nije thekei return kore tai eta leka dorkar nei
// 3. const user = Object.create(createUser.prototype); ----> new keyword nije thekei eta create kore nebe tai eta dorkar nei

// console.log(user1);

user1.about(); // tutul 29 */



// Constructor function
// new keyword er khetre function name er first letter sobsomoy capital letter e likhte hoi
function CreateUser(firstName, lastName, email, age, address){
    
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
    
   
}

CreateUser.prototype.about =   function(){
    return `${this.firstName} is ${this.age} years old`;
};

CreateUser.prototype.is18 =  function(){
    return this.age >=18;
};

CreateUser.prototype.sing = function(){
    return "la la la la";
}
const user1 = new CreateUser('Tutul', 'Kabir','tutul@gmail.com', 29, 'myaddress');
const user2 = new CreateUser('Atif', 'Islam','atif@gmail.com', 25, 'myaddress');
const user3 = new CreateUser('Ayan', 'Ali','ayan@gmail.com', 22, 'myaddress');

console.log(user1);
console.log(user1.is18()); //true
console.log(user1.sing()); //la la la la
console.log(user1.about()); //Tutul is 29 years old