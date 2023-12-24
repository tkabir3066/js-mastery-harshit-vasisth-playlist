

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

  eat(){
      return `modified eat :${this.name} is eating grass`;
  }
  run(){
      return ` ${this.name} is running at ${this.speed} kmph`;
  }
}

// onnannyo programming language e Object ke instance bola hoi but javascript e instance

const tommy = new Dog("Tommy", 3, 45);
console.log(tommy.eat()) // modified eat :Tommy is eating grass 