//Error handling
const url = "https://jsonplaceholder.typicode.com/posts";
// const url = "https://jsonplaceholder.typicode.com/postss";

const xhr = new XMLHttpRequest();
xhr.open("get", url);

xhr.onload = () => {
  if (xhr.status >= 200 && xhr.status < 300) {
    const data = JSON.parse(xhr.response);

    const id = data[3].id;
    const url2 = `${url}/${id}`;
    const xhr2 = new XMLHttpRequest();

    xhr2.onload = () => {
      const data2 = JSON.parse(xhr2.response);
      console.log(data2);
    };

    xhr2.open("GET", url2);

    xhr2.send();
  } else {
    console.log("Something went wrong...");
  }
};

//network related error

xhr.onerror = () => {
  console.log("network error");
};
xhr.send();
