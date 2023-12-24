// super keyword

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
  constructor(name,age,speed){
       super(name, age);
       this.speed = speed;
  }

  run(){
      return ` ${this.name} is running at ${this.speed} kmph`;
  }
}

// onnannyo programming language e Object ke instance bola hoi but javascript e object

const tommy = new Dog("Tommy", 3, 45);
console.log(tommy); //Object { name: "Tommy", age: 3, speed: 45 }
console.log(tommy.run()); //  Tommy is running at 45 kmph
