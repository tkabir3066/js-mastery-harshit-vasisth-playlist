 // clone using Object.assign
 // 

//  const obj = {
//      key1: "value1",
//      key2: "value2"
//  }

// const obj2 = obj;
// obj.key3 = "value3";

// console.log(obj);  //Object { key1: "value1", key2: "value2", key3: "value3" }
// console.log(obj2); //Object { key1: "value1", key2: "value2", key3: "value3" }





const obj = {
    key1: "value1",
    key2: "value2"
}


// 1st method of cloning(new spread operator)
// const obj2 = {...obj};

//2nd method(old spread operator)
const obj2 = Object.assign({}, obj);  // eta purono spread operator tai purono code e majhe majhe ei code dekhte pabo
obj.key3 = "value3";


console.log(obj);  //Object { key1: "value1", key2: "value2", key3: "value3" }
console.log(obj2); //Object { key1: "value1", key2: "value2" }
