// if else condition
 let age = 17;

 if(age>=18){
     console.log('User can play ddlc');
 }
 else{
     console.log("User can play mario");
 }



 let num = 14;
 if(num%2===0){
     console.log("Even");
 }
 else{
     console.log("odd");
 }




 // falsy values -> false,  "",  null,  undefined, NaN, 0


// ""
 let firstName = "";

 if(firstName){
     console.log(firstName)
    }

    else{
        console.log("firstyName is Empty");
    }

// undefined
let name;

if(name){
    console.log(name);
}
else{
    console.log('name is not defined');
}


// null

let number = null;
if(number){
    console.log(number);
}
else{
    console.log("number is null");
}


//0
let x=0;
if(x){
    console.log(x);
}
else{
    console.log('x is empty');
}


// false 

let mangoPrice = false;
if(mangoPrice){
    console.log(mangoPrice);

}

else{
    console.log("mango price is empty");
}

// truthy values
// "abc"
// 1, -1 etc