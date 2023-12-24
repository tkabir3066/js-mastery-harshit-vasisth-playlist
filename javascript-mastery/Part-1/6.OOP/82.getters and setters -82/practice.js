
/* class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(fullName){
     const [firstName,lastName] = fullName.split(" ");
     this.firstName = firstName;
     this.lastName= lastName;
    }
}


const person1 = new Person("Tutul", "kabir", 29);
console.log(person1.fullName); // Tutul kabir
person1.fullName = "Ayan Ali";
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.fullName); // Ayan Ali */



class Student{
    constructor(id,firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
    }

    get studentInfo(){
        return `${this.id} ${this.firstName} ${this.lastName}`;
    }

    set studentName(studentName){
        const [firstName, lastName] = studentName.split(" ")
        this.firstName = firstName;
        this.lastName = lastName;
     }
}

const student1 = new Student(101, "Atif", "Ali");
console.log(student1.studentInfo);

student1.studentName = "Afsin Rahaman";
console.log(student1.firstName);
console.log(student1.lastName);