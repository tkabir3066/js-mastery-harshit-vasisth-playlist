// block scope vs function scope



// let and const are block scope
// var is function scope 


{
 let firstName = "Atif";
}
// console.log(firstName); //Uncaught ReferenceError: firstName is not defined 

// if in a block we make a variable using let and const and only inside this block we can access these variable but cannot access outside this block but we can access outside the block with var only

{
    let fName = "Tutul";
    console.log(fName); //Tutul
}

{
    let fName = "Ayaan";
    console.log(fName); //Ayaan
}

{
    const mango = 29;
    console.log(mango); // 29
}


{
    const mango = 40;
}
// console.log(mango); // Uncaught ReferenceError: mango is not defined


{
    var firstName = "mahira";
}
console.log(firstName); // mahira