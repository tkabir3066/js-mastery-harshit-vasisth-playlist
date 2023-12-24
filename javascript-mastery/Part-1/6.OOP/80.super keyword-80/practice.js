
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

class Dog extends Animal{
    constructor(name, age,speed){
        super(name, age);
        this.speed = speed;
    }

    run(){
        return `${this.name} is running ${this.speed}kmph`;
    }
}

const tommy = new Dog("Tom",3,45);
console.log(tommy); //Object { name: "Tom", age: 3, speed: 45 }
console.log(tommy.run()); //Tom is running 45kmph