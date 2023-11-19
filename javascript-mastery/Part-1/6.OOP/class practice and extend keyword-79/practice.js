
class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    eat(){
        return `${this.name} is eating grass`;
    }

    isSuperCute(){
        return this.age <=1;
    }

    isCute(){
        return true;
    }
}

const animal1 = new Animal("Deer",1);
const animal2 = new Animal("Cow",3);

// console.log(animal1.eat());
// console.log(animal1.isSuperCute());
// console.log(animal1.isCute());

// console.log(animal2.eat());
// console.log(animal2.isSuperCute());
// console.log(animal2.isCute());


class Dog extends Animal{

}

const tommy = new Dog("Tom",3);
console.log(tommy.eat());
console.log(tommy.isSuperCute());
console.log(tommy.isCute());