//Sets(it is iterable)
//store data
// sets also have its own methods
// No index-based access
// Order is not guranteed 
// unique items only (no duplicates allowed)



// A JavaScript Set is a collection of unique values.
// Each value can only occur once in a Set.
// A Set can hold any value of any data type.

// Set Methods
// Method:	         Description:
// new Set()	    Creates a new Set
// add()	        Adds a new element to the Set
// delete()	        Removes an element from a Set
// has()	        Returns true if a value exists
// clear()        	Removes all elements from a Set
// forEach()	    Invokes a callback for each element
// values()	        Returns an Iterator with all the values in a Set
// keys()	        Same as values()
// entries()	    Returns an Iterator with the [value,value] pairs from a Set

// Property:	       Description:
// size	           Returns the number elements in a Set




const numbers = new Set([1,2,3,3,4,4]);
// console.log(numbers); // Set(4) [ 1, 2, 3, 4 ] // no duplicate data print
// console.log(numbers[2]); //undefined 
 const isPresent =numbers.has(1);
console.log(isPresent); // true



if(isPresent){
    console.log("1 is present");
}
else{
    console.log("1 is not present");
}


//  Set is iterable so we can iterate with for of loop
     for(let number of numbers){
         console.log(number);
     }









// how to add
// const items = ["item1", "item2", "item3"];
// const numbers = new Set();
// numbers.add(1);
// numbers.add(2);
// numbers.add(2); // duplicate not allowed
// console.log(numbers); //Set [ 1, 2 ]
// numbers.add(items);
// numbers.add(items); // not store dulicate data because items array address is same
// console.log(numbers); //Set(3) [ 1, 2, (3) […] ]


 
 const set1 = new Set();
 set1.add(["id1", "id2", "id3"]);
 set1.add(["id1", "id2", "id3"]);
// dutoi array add hobe duplicate hobena karon array er address alada
console.log(set1); //Set [ (3) […], (3) […] ]






// when will use Set method
// set ke tokhon e use  korbo jokhon e apanr pase unique value thakbe...ak value akbar er beshi aste parbe na.......

const myArray = [1,2,4,4,5,6,5,6];
const uniqueElements = new Set(myArray);
console.log(uniqueElements);
console.log(uniqueElements.length); // undefined