// objects inside array
// very useful in real world applications

const users = [
    {userId:101,  firstName:"Tutul", gender: "male"},
    {userId:102,  firstName:"Atif", gender: "male"},
    {userId:103,  firstName:"Mahira", gender: "female"}
]

console.log(users); // Array(3) [ {…}, {…}, {…} ]

for(const user of users){
    console.log(user.userId);
    console.log(user.firstName);
    console.log(user.gender);
};