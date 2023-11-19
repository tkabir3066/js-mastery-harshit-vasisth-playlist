
const obj = {
    key1: "val1",
    key2: "val2",
}

// const obj2 = obj;
// console.log(obj);
// console.log(obj2);

const  obj2 = {...obj};
obj.key3 = "val3";
console.log(obj);
console.log(obj2);