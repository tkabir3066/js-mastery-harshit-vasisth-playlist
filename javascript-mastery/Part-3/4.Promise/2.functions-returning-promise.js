//function returning promise

const bucket = ["coffee", "chips", "vegetables", "rice"];
function ricePromise() {
  return new Promise((resolve, reject) => {
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
}

ricePromise()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
