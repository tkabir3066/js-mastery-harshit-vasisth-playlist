

class CreateUser{
    constructor(firstName,lastName, age, email, address){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.address = address;
    }

    about(){
        return `${this.firstName} ${this.lastName} is ${this.age} years old.`;
    }

    is18(){
        return this.age >= 18;
    }

    sing(){
        return "tere bin kaise jiya";
    }

    func(a){
        console.log(a); //Ayaan
    }
}

const user1 = new CreateUser("Tutul", "Kabir", 29, "tutulkabir@gmail.com", "myaddress");
const user2 = new CreateUser("Anarul", "Kabir", 26, "anarulkabir@gmail.com", "myaddress");
const user3 = new CreateUser("Atif", "Islam", 12, "atif@gmail.com", "myaddress");

console.log(user1.about()); //Tutul Kabir is 29 years old.
console.log(user1.is18()) // true
console.log(user1.sing()) 

user1.func("Ayaan");

console.log(Object.getPrototypeOf(user1)); // object