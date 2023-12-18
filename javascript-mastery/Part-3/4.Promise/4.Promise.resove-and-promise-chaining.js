//Promise.resolve()
//Promise Chaining
/* 
const myPromise = Promise.resolve(5);

myPromise.then((value) => {
  console.log(value); //5
});
 */
//then()
//then() method hamesha promise return karte hai

function myPromise() {
  return new Promise((resolve, reject) => {
    resolve("foo");
  });
}

myPromise()
  .then((value) => {
    console.log(value);
    value += "bar";
    return value; //jodi promise return na kori tahole bydefault undefined return hobe
  })
  .then((value) => {
    console.log(value);
    value += "buzz";
    return value;
  })
  .then((value) => {
    console.log(value);
  });
