// Map
// Map is an iterable
// store data in ordered fashion
// store key value pair (like object)
// duplicate keys are not allowed like objects
// different between maps and objects
// objects can only have string or symbol
// as key
// in map you can use anything as key
// like array , number, string



//object literal
//key--> string
// key-->symbol

/* const person ={
    name: "Tutul",
    age: 7,
    1: "one"
}

console.log(person.name);
console.log(person["name"]);
// console.log(["1"]); // Array [ "1" ]
console.log([1]); //Array [ 1 ]
  for(let key in person){
    //   console.log(key);
    //   console.log(typeof key); //string
  }

 */


//   Map

// A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.
// A Map has a property that represents the size of the map.

// const student = new Map();
// student.set("name", "Tutul Kabir");
// student.set("id", 101);
// student.set(1,"one");
// console.log(student); //Map(3) { name → "Tutul Kabir", id → 101, 1 → "one" }
// console.log(student.get(1));//one
// console.log(student.get("name"));//Tutul Kabir
// console.log(student.keys());


// const person = new Map();
// person.set("name", "Anarul Kabir");
// person.set("id", 101);
// person.set(1, "one");
// console.log(person); // Map(3) { name → "Anarul Kabir", id → 101, 1 → "one" }
// console.log(person.get("name"));///Anarul Kabir
//  console.log(person.get("id"));  //101 
// console.log(person.get(1)); // one

// console.log(person.keys()) // to print all keys



// keys ke loop chaliye o print korte pari

// for(let key of person.keys()){
//   console.log(key, typeof key);
// }


// for(let key of person){
//   // console.log(key);        //Array [ "name", "Anarul Kabir" ]
//                            //Array [ "id", 101 ]
//                           // Array [ 1, "one" ]

//    console.log(typeof key); //object
//    console.log(Array.isArray(key)); //true
// }                       



// for(let [key, value] of person){
//   console.log(key, value);        //  name Anarul Kabir
//                                   //  id 101
//                                   //   1 one

//   //  console.log(typeof key); //object
//   //  console.log(Array.isArray( key)); //true
// }    



//---------------------Maps---------------------------------//

       