const person = {
    name:"Tutul Kabir",
    age:29,
    gender: "male",
    job:"Web"
}

// function printDetails(obj){
//     console.log(obj.name);
//     console.log(obj.age);
//     console.log(obj.gender);
//     console.log(obj.job);

// }

// printDetails(person);




function printDetails({name, age, gender, job}){
    console.log(name);
    console.log(age);
    console.log(gender);
    console.log(job);
    
}

printDetails(person);