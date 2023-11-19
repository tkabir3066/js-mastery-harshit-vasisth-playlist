
let firstName = "Tutul";
let lastName = "Kabir";

// 1st method
// let fullName = firstName +" "+ lastName;

// 2nd method
let flName = firstName.concat(" "+lastName);
console.log(flName);



let string1 = "45";
let string2 = "10";

let add = string1+string2;
console.log(add);

// convert to number

//1st method
add = +string1 +  +string2;
console.log(typeof add);

//2nd method

addTotal1 = parseInt(string1) + parseInt(string2);
console.log(typeof addTotal1)

// 3rd method

addTotal2 = Number(string1) + Number(string2);
console.log(typeof addTotal2)