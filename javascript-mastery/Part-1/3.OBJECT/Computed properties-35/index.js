// computed properties


const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";


// 1st method
/* const obj ={
    [key1]: value1,
    [key2]: value2+

}

console.log(obj);   // {"objkey1": "myvalue1","objkey2": "myvalue2"} */


// 2nd method

 const obj = {};
 obj[key1] = value1;
 obj[key2] = value2;

 console.log(obj); // {"objkey1": "myvalue1","objkey2": "myvalue2"} */
