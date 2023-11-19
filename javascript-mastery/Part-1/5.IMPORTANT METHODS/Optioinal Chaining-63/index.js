// Optional chaining (?.)
/* 
 The optional chaining operator (?.) enables you to read the value of a property located deep within a chain of connected objects without having to check that each reference in the chain is valid.

The ?. operator is like the . chaining operator, except that instead of causing an error if a reference is nullish (null or undefined), the expression short-circuits with a return value of undefined. When used with function calls, it returns undefined if the given function does not exist.

This results in shorter and simpler expressions when accessing chained properties when the possibility exists that a reference may be missing. It can also be helpful while exploring the content of an object when there's no known guarantee as to which properties are required.

Optional chaining cannot be used on a non-declared root object, but can be used with an undefined root object.


                            Syntax
                            
                            obj.val?.prop
                            obj.val?.[expr]
                            obj.arr?.[index]
                            obj.func?.(args)
*/

const user = {
    name: "Tutul",
    // address : {houseNumber:"1234"}
}

console.log(user.name); // Tutul
console.log(user?.address?.houseNumber); // undefined



const adventurer = {
    name: 'Alice',
    cat: {
      name: 'Dinah'
    }
  };
  
  const dogName = adventurer.dog?.name;
  console.log(dogName);
  // expected output: undefined
  
  console.log(adventurer.someNonExistentMethod?.());
  // expected output: undefined
  +
