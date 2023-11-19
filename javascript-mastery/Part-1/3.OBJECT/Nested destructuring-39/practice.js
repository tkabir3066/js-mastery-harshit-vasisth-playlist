

const users = [
    {userId:101,  firstName:"Tutul", gender: "male"},
    {userId:102,  firstName:"Atif", gender: "male"}, 
    {userId:103,  firstName:"Mahira", gender: "female"}
];

 const [{userId:id1, firstName: user1FistName}, , {firstName: user3FistName, gender:user3Gender}] = users;
 console.log(id1);
 console.log(user1FistName);

 console.log(user3FistName);
 console.log(user3Gender);
 
 
/* const [{userId:id1, firstName: user1FistName, gender:user1Gender}, {userId:id2, firstName: user2FistName, gender:user2Gender}, {userId:id3, firstName: user3FistName, gender:user3Gender}] = users;

console.log(id1);
console.log(user1FistName);
console.log(user1Gender);

console.log(id2);
console.log(user2FistName);
console.log(user2Gender);

console.log(id3);
console.log(user3FistName);
console.log(user3Gender); */
