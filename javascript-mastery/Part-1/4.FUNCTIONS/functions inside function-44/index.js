// functions inside function

const app = () =>{
const myFunc =()=>{
    console.log("hello from myFunc");
}
const add = (a,b)=>{
    return a+b;
}

const mul = (num1, num2)=>{
    return num1*num2;
}
console.log("inside app");

myFunc();
console.log(add(25,5));
console.log(mul(10,15));
}

app();