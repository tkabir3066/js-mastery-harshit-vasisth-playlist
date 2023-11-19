// short syntex

const user1 = {
    firstName : "Tutul",
    age:29,
    about:function(){
        console.log(this.firstName, this.age);
    }
}

const user2 = {
    firstName : "Rinka",
    age:27,
    about(){
        console.log(this.firstName, this.age);
    }
}
user1.about();
user2.about();