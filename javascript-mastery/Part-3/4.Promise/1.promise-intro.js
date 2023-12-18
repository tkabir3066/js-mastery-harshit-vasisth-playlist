//Promise
//Promise represents the future value

const bucket = ["coffee", "chips", "vegetables", "rice"];

const FriedRicePromise = new Promise((resolve, reject) => {
  if (
    bucket.includes("vegetables") &&
    bucket.includes("salt") &&
    bucket.includes("rice")
  ) {
    resolve("Fried Rice");
  } else {
    reject(new Error("There are missing a ingredients"));
  }
});

//consume
//how to consume

FriedRicePromise.then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});
