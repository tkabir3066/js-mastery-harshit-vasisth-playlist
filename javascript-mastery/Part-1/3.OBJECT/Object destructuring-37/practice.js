

const product = {
    productName : "Laptop",
    productPrice: 45000,
    productQuantity: 15,
    isProductAvailable:true 
};


const {productName, productPrice, productQuantity, isProductAvailable} = product;
console.log(productName);
console.log(productPrice);
console.log(productQuantity);
console.log(isProductAvailable);




const studentDetails = {
    id:101,
    fullName: "Anarul Kabir",
    cgpa: 7.8,
    percentage:79
};

// const {id, fullName,...rest} = studentDetails;

// console.log(id)
// console.log(fullName)
// console.log(rest)


const {id:var1, fullName:var2,...rest} = studentDetails;
console.log(var1)
console.log(var2)