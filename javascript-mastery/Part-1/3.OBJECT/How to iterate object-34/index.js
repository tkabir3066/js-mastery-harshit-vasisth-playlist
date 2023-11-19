// how to iterate object

 const person = {
     name : "Tutul",
     age:29,
     "person hobbies" :["learning", "sleeping", "singing"]
 }

//  to method for iterate object
// 1. for in loop
// 2. object.keys

 /* for(let key in person){
    //  console.log(person[key]);
    //  console.log(key, person[key]);
     console.log(`${key}: ${person[key]}`);
 } */

/*  let obj =   Object.keys(person); // Object.keys() returns array
 console.log(obj); //Array(3) [ "name", "age", "person hobbies" ]
 console.log(typeof obj);
 const value = Array.isArray(Object.keys(person)); // this method check array or not 
 console.log(value); */





 // Object.keys() array return kore tai for of loop chalate hobe
        
 for(let key of Object.keys(person) ){
         console.log(person[key]);
 }