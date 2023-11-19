// Maps
// A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.
// A Map has a property that represents the size of the map.




// Map Methods
// Method                          	Description

// new Map()	                    Creates a new Map object
// set()	                        Sets the value for a key in a Map
// get()                          	Gets the value for a key in a Map
// clear()                         Removes all the elements from a Map
// delete()                        Removes a Map element specified by a key
// has()	                        Returns true if a key exists in a Map
// forEach()	                    Invokes a callback for each key/value pair in a Map
// entries()	                    Returns an iterator object with the [key, value] pairs in a Map
// keys()	                        Returns an iterator object with the keys in a Map
// values()                        Returns an iterator object of the values in a Map


// Property                          	Description
// size	Returns the number of Map elements


// How to Create a Map

// You can create a JavaScript Map by:
    // Passing an Array to new Map()
    // Create a Map and use Map.set()



// new Map()
// You can create a Map by passing an Array to the new Map() constructor:

// Create a Map
// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
//   ]);

//   console.log(fruits.get("oranges")); //200
//   console.log(fruits.get("bananas")); //300
//   console.log(fruits.get("apples")); //500



// Map.set()
// You can add elements to a Map with the set() method:

// Create a Map
// const fruits = new Map();

// // Set Map Values
// fruits.set("apples", 500);
// fruits.set("bananas", 300);
// fruits.set("oranges", 200);

// console.log(fruits); //Map(3) { apples → 500, bananas → 300, oranges → 200 }
// console.log(fruits.get("apples"));// 500





//The set() method can also be used to change existing Map values:
// Create a Map
// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
//   ]);
  
//   fruits.set("apples", 200);

//   console.log(fruits.get("apples")); // 200


// Map.get()
// The get() method gets the value of a key in a Map:
// Create a Map
// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
//   ]);

//   console.log(fruits.get("bananas"));//300




// Map.size
// The size property returns the number of elements in a Map:
// Create a Map
// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
//   ]);

//   console.log(fruits.size); //3




  //Map.delete()
// The delete() method removes a Map element:
// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
//   ]);

//   fruits.delete("apples");
//   console.log(fruits.size); // 2






// Map.clear()
// The clear() method removes all the elements from a Map:
// const fruits = new Map([
//   ["apples", 500],
//   ["bananas", 300],
//   ["oranges", 200]
// ]);

// fruits.clear();
// console.log(fruits.size); // 0



// Map.has()
// The has() method returns true if a key exists in a Map:

// const fruits = new Map([
//   ["apples", 500],
//   ["bananas", 300],
//   ["oranges", 200]
// ]);

// console.log(fruits.has("bananas")); // true
// fruits.delete("oranges");
// console.log(fruits.has("oranges")); // false





// Maps are Objects
// typeof returns object:

// const fruits = new Map([
//   ["apples", 500],
//   ["bananas", 300],
//   ["oranges", 200]
// ]);

// console.log(typeof fruits); // object
// console.log(Array.isArray(fruits)); // false




// instanceof Map returns true:

// const fruits = new Map([
//   ["apples", 500],
//   ["bananas", 300],
//   ["oranges", 200]
// ]);

// console.log(fruits instanceof Map); // true





// JavaScript Objects vs Maps
// Differences between JavaScript Objects and Maps:
	//                 Object                                	Map
// Iterable     	  Not directly iterable 	                  Directly iterable
// Size        	  Do not have a size property      	        Have a size property
// Key Types   	  Keys must be Strings (or Symbols)       	Keys can be any datatype
// Key Order   	  Keys are not well ordered                 Keys are ordered by insertion
// Defaults 	      Have default keys 	                      Do not have default keys





// Map.forEach()
// The forEach() method invokes a callback for each key/value pair in a Map:
// const fruits = new Map([
//   ["apples", 500],
//   ["bananas", 300],
//   ["oranges", 200]
// ]);

// fruits.forEach((value, key)=>{
//   console.log(key);
//   console.log(value);
// })



// for of loop
// for(let [key,value] of fruits){
//   console.log(key, value);
// }




//Map.keys()
// The keys() method returns an iterator object with the keys in a Map:
// const fruits = new Map([
//   ["apples", 500],
//   ["bananas", 300],
//   ["oranges", 200]
// ]);

// for(let key of fruits.keys()){
//     console.log(key);
// }





// Map.values()
// The values method returns an iterator object with the values in a Map:

// const fruits = new Map([
//   ["apples", 500],
//   ["bananas", 300],
//   ["oranges", 200]
// ]);

// let total = 0;
// for (const x of fruits.values()) {
//   total = total + x;

// }
// console.log(total);//1000





// Map.entries()
// The entries() method returns an iterator object with the [key,values] in a Map:
// const fruits = new Map([
//   ["apples", 500],
//   ["bananas", 300],
//   ["oranges", 200]
// ]);

// for(let entry of fruits.entries()){
//   console.log(entry);
// }



//Objects as Keys
// Being able to use objects as keys is an important Map feature.
// Create Objects
// const apples = {name: 'Apples'};
// const bananas = {name: 'Bananas'};
// const oranges = {name: 'Oranges'};


// // Create a Map
// const fruits = new Map();


// // Add the Objects to the Map
// fruits.set(apples, 500);
// fruits.set(bananas, 300);
// fruits.set(oranges, 200);


// console.log(fruits.get(apples)); // 500
// console.log(fruits.get(bananas)); // 300
// console.log(fruits.get(oranges)); //200




// Remember: The key is an object (apples), not a string ("apples"):
// Create Objects
const apples = {name: 'Apples'};
const bananas = {name: 'Bananas'};
const oranges = {name: 'Oranges'};

// Create a Map
const fruits = new Map();

// Add Elements to the Map
fruits.set(apples, 500);
fruits.set(bananas, 300);
fruits.set(oranges, 200);

console.log(fruits.get("apples")); //undefined