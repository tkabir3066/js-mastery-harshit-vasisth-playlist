
const obj1 = {
    key1: "val1",
    key2: "val2",
};

const obj2 = {
    key1: "banana",
    key3: "val3",
    key4: "val4",
};



const newObj = {...obj1, ...obj2, key99:"val99"};
console.log(newObj)

const newObject1 = {..."123456789"};
console.log(newObject1);


const newObject2 = {...["item1", "item2", "item3"]};
console.log(newObject2);
