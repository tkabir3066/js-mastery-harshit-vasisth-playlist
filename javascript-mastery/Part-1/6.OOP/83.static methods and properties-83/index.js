// static methods and properties
// static method class er sathe somporkito tai class diye call korte hobe



class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    static classInfo(){
        return 'This is person class';
    }

    static desc= "static property"; //static property

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }

    eat(){
        return `${this.name} is eating grass`;
    }

    isSuperCute(){
        return this.age <= 1;
    }
    isCute(){
        return true;
    }
}


const person1 = new Person("Tutul", "Kabir", 25);
// console.log(person1.fullName()); //Uncaught TypeError: Person.fullName is not a function
// console.log(person1.fullName);  // Tutul Kabir

person1.fullName = "Ayan Ali";
// console.log(person1.fullName); // Ayan Ali

const info = Person.classInfo();
console.log(info); //This is person class

console.log(Person.desc); //static property