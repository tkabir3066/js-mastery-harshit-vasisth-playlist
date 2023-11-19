// class keyword
// in javascript classes are fake


class CreateUser{
    constructor(firstName, lastName, age, email, address){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }

    about(){
        return `${this.firstName} is ${this.age} years old `;
    }

    is18(){
        return this.age >= 18;
    }
    sing(){
        return "tere bin kaise jiya";
    }

    func(a){
        console.log(a)
    }
}


const user1 = new CreateUser('Tutul', 'Kabir', 29, 'tutulkabir@gmail.com', 'myaddress');
const user2 = new CreateUser('Tutul', 'Kabir', 29, 'tutulkabir@gmail.com', 'myaddress');
const user3 = new CreateUser('Tutul', 'Kabir', 29, 'tutulkabir@gmail.com', 'myaddress');

console.log(user1.firstName);
console.log(user1.about());
console.log(user1.is18());
console.log(user1.sing());

user1.func("Atif"); // Atif
// how to check prototype

console.log(Object.getPrototypeOf(user1));