// Lexical Scope in JavaScript – What Exactly Is Scope in JS?


// The term “lexical scope” may seem tricky to grasp at first glance. But it's helpful to understand what each word means.
//So this article will explain lexical scope by first examining the meaning of “lexical” and “scope”.

// So, let’s get it started by understanding the term “scope”.

// What exactly is Scope?
// Scope refers to the area where an item (such as a function or variable) is visible and accessible to other code.

// Note:

// Scope means area, space, or region.
// Global scope means global space or a public space.
// Local scope means a local region or a restricted region.


//Here's an example:


// Define a variable in the global scope:
const fullName = "Oluwatobi Sofela";

// Define nested functions:
function profile() {
  function sayName() {
    function writeName() {
      return fullName;
    }
    return writeName();
  }
  return sayName();
}

//In the snippet above, we defined the fullName variable in the global scope. This means that it is visible and accessible globally to all code within the script.

//But we defined writeName() within the sayName() function, so it is locally scoped to sayName().

// In other words, writeName() is locally visible and accessible only to code in the sayName() function.



//Keep in mind that whenever the writeName() function gets invoked, the computer will not go straight to the global scope to call the fullName variable. Instead, it must sequentially go through the scope chain to look for fullName.



//What is a Scope Chain?
// A scope chain refers to the unique spaces that exist from the scope where a variable got called to the global scope.


//Here's an example:

//// Define a variable in the global scope:
const fullName = "Oluwatobi Sofela";

// Define nested functions:
function profile() {
  function sayName() {
    function writeName() {
      return fullName;
    }
    return writeName();
  }
  return sayName();
}



// In the snippet above, observe that the fullName variable got called from the writeName() function's scope.

// Therefore, the scope chain that exists from the variable’s call to the global scope is:

// writeName() scope ---> sayName() scope ---> profile() scope ---> global scope

// In other words, there are four (4) spaces from fullName’s invocation scope to its lexical scope (the global scope in this instance).

// Note: The global scope is the last link in JavaScript's scope chain.



//How Does the Scope Chain Work?
// JavaScript's scope chain determines the hierarchy of places the computer must go through — one after the other — to find the lexical scope (origin) of the specific variable that got called.

// For instance, consider the code below: