// spread operator in array
/* 
const array1 = [1,2,3];
const array2 = [4,5,6];

  const newArray = [...array1, ...array2, 50, 65];
  console.log(newArray);  //Array(6) [ 1, 2, 3, 4, 5, 6,50,65 ]


  const arrayString1 = [..."abc"];
  console.log(arrayString1); //Array(3) [ "a", "b", "c" ]


  const arrayString2 = [..."123456789"];
  console.log(arrayString2); //Array(9) [ "1", "2", "3", "4", "5", "6", "7", "8", "9" ]
 
  const newArray2 = [...123456789];
  console.log(newArray2); //Uncaught TypeError: 123456789 is not iterable */




  // spread operator in objects

   const obj1 = {
       key1: "value1",
       key2: "value2"
   };

   const obj2 = {
       key1: "valueUnique",
       key3: "value3",
       key4: "value4"
   };

   const newObject = {...obj1, ...obj2};
   console.log(newObject); //Object { key1: "valueUnique", key2: "value2", key3: "value3", key4: "value4" }
   
   const newObject2 = {...obj1, ...obj2, key90: "value90"};
   console.log(newObject2); //Object { key1: "valueUnique", key2: "value2", key3: "value3", key4: "value4", key90: "value90" }

   // ekta object e same property ek er beshi thakte parbe na... jemon obj1 e key1 ache abr obj2 te key1 ache ... spread operator er sahajje new object  toire korar somoi key1 ta override korbe mane hocche pore jeta key1 ache


   const newObject3 = {..."abcdefghijklmnopqrstuvwxyz"};
   console.log(newObject3); //Object { 0: "a", 1: "b", 2: "c", 3: "d", 4: "e", 5: "f", 6: "g", 7: "h", 8: "i", 9: "j", … }
   
   

   const newObject4 = {...["item1","item2","item3"]};
   console.log(newObject4); //Object { 0: "item1", 1: "item2", 2: "item3" }