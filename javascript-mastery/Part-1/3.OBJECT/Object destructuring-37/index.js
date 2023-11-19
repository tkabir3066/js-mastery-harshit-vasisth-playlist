// object destructuring

const band = {
    bandName : "led zeppelin",
    famousSong: "stairway to heaven",
    
}

// const bandName = band.bandName;
// console.log(bandName);
// const famousSong = band.famousSong;
// console.log(famousSong);


// const {bandName, famousSong} = band;
// console.log(bandName);
// console.log(famousSong);


let {bandName, famousSong} = band;
bandName = "queen";
console.log(bandName); // queen
console.log(famousSong);



const band2 = {
    bandName : "jal pori",
    famousSong: "Woh lamhe",
    year : 2004,
    anotherFamousSong: "tere bin"
};



const {bandName:var1, famousSong:var2, ...restProps} = band2;
console.log(var1); //jal pori
console.log(var2); // Woh lamhe
console.log(restProps); //Object { year: 2004, anotherFamousSong: "tere bin" }