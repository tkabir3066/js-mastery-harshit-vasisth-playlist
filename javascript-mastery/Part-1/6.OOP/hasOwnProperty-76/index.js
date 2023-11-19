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


for(let key in user1){
    // console.log(key);
    if(user1.hasOwnProperty(key)){
         console.log(key);
    }
}