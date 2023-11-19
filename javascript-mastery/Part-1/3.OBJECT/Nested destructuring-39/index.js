// nested destructuring

const users = [
    {userId:101,  firstName:"Tutul", gender: "male"},
    {userId:102,  firstName:"Atif", gender: "male"}, 
    {userId:103,  firstName:"Mahira", gender: "female"}
]


// const [{firstName, gender1}, {userId}, {gender}] = users;
// console.log(firstName);
// console.log(userId);
// console.log(gender);


const [{userId:id101, firstName: user1FistName}, , {firstName: user3FistName, gender:user3Gender}] = users;
 console.log(id101);
 console.log(user1FistName);

 console.log(user3FistName);
 console.log(user3Gender);


 
const [{userId:id1,firstName:name1, gender:gn1}, {userId:id2,firstName:name2, gender:gn2}, {userId:id3,firstName:name3, gender:gn3}] = users;

console.log(id1);
console.log(name2);
console.log(gn3);