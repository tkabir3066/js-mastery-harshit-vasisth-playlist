
// getter and setters
/* 
class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

     setName(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}


const person1 = new Person("Tutul", "Kabir", 25);
// console.log(person1.fullName()); //Uncaught TypeError: Person.fullName is not a function
console.log(person1.fullName);  // Tutul Kabir

// person1.setName("Anarul", "Sk");

person1.firstName = "Arif";
person1.lastName = "Ali";
console.log(person1.firstName)
console.log(person1.lastName) */




/* 
class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}


const person1 = new Person("Tutul", "Kabir", 25);
// console.log(person1.fullName()); //Uncaught TypeError: Person.fullName is not a function
// console.log(person1.fullName);  // Tutul Kabir

person1.fullName = "Ayan Ali";
console.log(person1.fullName); // Ayan Ali */




class Student{
    constructor(id,name){
        this.id = id;
        this.name = name;
    }

    set studentName(name){
       this.name = name;
    }

    get studentInfo(){
        return `${this.id} ${this.name}`;
    }
}


let student1 = new Student(101, "Tutul Kabir");
console.log(student1.studentInfo); //101 Tutul Kabir
console.log(student1.id); //101
console.log(student1.name); //Tutul Kabir

student1.studentName = "Mridul Islam";
console.log(student1.name); //Mridul Islam