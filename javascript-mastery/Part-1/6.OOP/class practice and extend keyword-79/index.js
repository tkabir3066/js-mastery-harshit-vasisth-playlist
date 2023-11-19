
class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;

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

// const animal1 = new Animal("Tom", 5);
// const animal2 = new Animal("Brown", 1);

// console.log(animal1.eat()); //Tom is eating grass
// console.log(animal1.isSuperCute()); // false
// console.log(animal1.isCute()); // true


// console.log(animal2.eat()); //Brown is eating grass 
// console.log(animal2.isSuperCute()); // true
// console.log(animal2.isCute()); // true



// use of extends keyword

class Dog extends Animal{

}

const tommy = new Dog("Tommy", 3);
console.log(tommy.eat()); // Tommy is eating grass
console.log(tommy.isCute()); // true
console.log(tommy.isSuperCute()); // false