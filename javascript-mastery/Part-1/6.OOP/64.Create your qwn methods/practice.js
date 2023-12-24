
/* 
const person1 = {
    firstName: "Tutul",
    age:25,
    about: function(){
        console.log(`First Name: ${this.firstName}, age: ${this.age}`);
    }
}

person1.about()

const person2 ={
    firstName : "Atif",
    age:10,
    about: person1.about,
}
person2.about();


const person3 ={
    firstName : "Ayan",
    age:22,
    about: person1.about,
}
person3.about();


const person4 ={
    firstName : "Mohidul",
    age:15,
    about: person1.about,
}
person4.about(); */


//2nd method


function personInfo(){
    console.log(`First Name: ${this.firstName}, age: ${this.age}`);
}

const person1 ={
    firstName : "Rabi",
    age:22,
    about: personInfo
}

person1.about();

const person2 ={
    firstName : "Rahi",
    age:20,
    about: personInfo
}

person2.about();