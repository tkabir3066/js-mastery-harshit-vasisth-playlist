
const app = ()=>{
const myFunc = ()=>{
    console.log("my function");
}

const add = (num1, num2)=>{
    return num1+num2;
}

const mul = (num1, num2)=>{
    return num1*num2;
}

const expon = (num1,num2)=>{
    return num1**num2;
}

myFunc();
    console.log("inside app");
    console.log(add(50,85));
    console.log(mul(50,85));
    console.log(expon(5,5));
}

app();