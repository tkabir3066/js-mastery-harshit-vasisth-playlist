//async await

const url = "https://jsonplaceholder.typicode.com/postss";

// fetch(url)
//   .then((res) => res.json())
//   .then((data) => console.log(data));

async function getPosts() {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  const data = await response.json();
  return data;
}
const myPosts = getPosts();
myPosts.then((data) => console.log(data)).catch((err) => console.log(err));
