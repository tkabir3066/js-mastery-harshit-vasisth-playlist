//fetch
//fetch promise return kore

//response.json() promise return kore
const url = "https://jsonplaceholder.typicode.com/posts";
fetch(url)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Something went wrong...");
    }
  })
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
